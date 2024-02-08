from fastapi import FastAPI
import json
import ml
import random
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
pathTop10 = "top10movie.json"
pathTop10onUser = "common_values.json"
pathTop10ByGenres = "Top10ByGenre.json"
pathModel = "model.pkl"

@app.get("/Top10")
def Top10():
    with open(pathTop10, "r") as file:
        return json.load(file)

@app.post("/UpdateTop10")
def UpdateTop10():
    ml.update_popularite()

@app.get("/RecomendationByGenre/{genre}")
def RecomendationByGenre(genre):
    return ml.recommend_movies(genre)

@app.get("/UpdateRecomendationByUser/{userid}")
def UpdateRecomendationByUser(userid: int):
    ml.update_recommendation_movies_by_user(userid)

@app.get("/RecomendationByUser")
def RecomendationByUser():
    with open(pathTop10onUser, "r") as file:
        data = json.load(file)
        titles = data.get("title", {})
        selected_titles = random.sample(list(titles.values()), min(10, len(titles)))
        return selected_titles