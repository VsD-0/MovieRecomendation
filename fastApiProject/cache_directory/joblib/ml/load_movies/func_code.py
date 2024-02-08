# first line: 10
@memory.cache
def load_movies():
    print("Loading movies... ")
    start_time = time.time()
    movies = pd.read_csv("movie.csv")
    print(time.time() - start_time)
    return movies
