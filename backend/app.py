from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)
CORS(app)  # Allow React frontend to access Flask backend

# Secret key for JWT
app.config["JWT_SECRET_KEY"] = "secret123"
jwt = JWTManager(app)

# Mock products
products = [
    {"id": 1, "title": "Shoe", "price": 40, "description": "Cool sneakers"},
    {"id": 2, "title": "Bag", "price": 70, "description": "Leather bag"},
]

# Public route to get products
@app.route("/api/products", methods=["GET"])
def get_products():
    return jsonify(products)

# Login route (no real DB for now)
@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    if data["email"] == "test@test.com" and data["password"] == "1234":
        token = create_access_token(identity=data["email"])
        return jsonify(access_token=token)
    return jsonify({"msg": "Invalid credentials"}), 401

# Checkout route (requires login)
@app.route("/api/checkout", methods=["POST"])
@jwt_required()
def checkout():
    user = get_jwt_identity()
    order_data = request.json
    return jsonify({"msg": f"Order placed by {user}", "order": order_data})

if __name__ == "__main__":
    app.run(debug=True)
