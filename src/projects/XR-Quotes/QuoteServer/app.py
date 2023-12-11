from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from random import randint
import json


app = FastAPI()

## setting CORS
##############################
origins = [
    "http://0.0.0.0:8080",
    "http://localhost:8080",
    "http://127.0.0.1:8080"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

###############################################################

# Function to load a JSON file
def load_json_file(file_path):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
        return data
    except Exception as e:
        return {"error": str(e)}

# Function to generate random quotes
def getRandomQuote():
    qIndex = randint(0, totalQuotes-1) # a random number in range of totalQuotes
    random_quote = QuoteData[qIndex]
    return random_quote


###############################################################

## loading all data
QuoteData = load_json_file("./data/" + "quotes.json")
## Range of Quotes' Index [0, 5420]
totalQuotes = 5421



###############################################################
####################       API Calls       ####################
###############################################################


# Define a route that handles GET requests to the root URL
@app.get("/")
def read_root():
    return getRandomQuote()

# Define a route that handles GET requests to /items/{item_id}
@app.get("/{data_pos}")
def read_item(data_pos: int):
    random_quote = QuoteData[data_pos]
    return random_quote 

@app.get("/info/{cmd}")
def read_item(cmd: str):
    if cmd == 'count':
        qCount = len(QuoteData)
    return {"Total Quotes": f"{qCount}"}


###############################################################
###############################################################


if __name__ == "__main__":
    import uvicorn 

    # Start the FastAPI application using the Uvicorn ASGI server
    uvicorn.run(app, host="0.0.0.0", port=8000)
