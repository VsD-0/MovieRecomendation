# first line: 19
@memory.cache
def load_ratings():
    print("Loading ratings... ")
    start_time = time.time()
    ratings = pd.read_csv("rating.csv")
    print(time.time() - start_time)
    return ratings
