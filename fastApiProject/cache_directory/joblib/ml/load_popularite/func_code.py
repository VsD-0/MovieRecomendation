# first line: 75
@memory.cache
def load_popularite():
    print("Loading popularite...")
    start_time = time.time()
    popularite = pd.read_csv("popularite.csv")
    print(time.time() - start_time)
    return popularite
