from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json


app = FastAPI()

## setting CORS
##############################
origins = [
    # "http://localhost.tiangolo.com",
    "http://0.0.0.0",
    "http://0.0.0.0:8080",
    "http://localhost",
    "http://localhost:8080",
    "https://ravi-prakash1907.github.io/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
##############################



# Function to load a JSON file
def load_json_file(file_path):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
        return data
    except Exception as e:
        return {"error": str(e)}



# Define a route that handles GET requests to the root URL
@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

# Define a route that handles GET requests to /items/{item_id}
@app.get("/{data_name}")
def read_item(data_name: str):
    data = load_json_file("data/" + data_name + ".json")
    return data # {"item_id": item_id, "q": q}

# # Define a route that handles GET requests to /items/{item_id}
# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: str = None):
#     return {"item_id": item_id, "q": q}

# # Define a route that handles POST requests to /items/
# @app.post("/items/")
# def create_item(item: dict):
#     return item

# # Define a route that handles PUT requests to /items/{item_id}
# @app.put("/items/{item_id}")
# def update_item(item_id: int, item: dict):
#     return {"item_id": item_id, **item}

# # Define a route that handles DELETE requests to /items/{item_id}
# @app.delete("/items/{item_id}")
# def delete_item(item_id: int):
#     return {"message": f"Item {item_id} has been deleted"}

if __name__ == "__main__":
    import uvicorn

    # Start the FastAPI application using the Uvicorn ASGI server
    uvicorn.run(app, host="0.0.0.0", port=8000)
