from  flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)
CORS(app)

app.config["JWT_SECRET_KEY"] = "20669"
jwt = JWTManager(app)

products = [
    {"id": 1, "title": "Shoe", "price": 40, "description": "Cool sneakers"},
    {"id": 2, "title": "Bag", "price": 70, "description": "Leather bag"},
]

@app.route("/api/products", methods=["GET"])
def get_products():
    return jsonify(products)

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json()
    if data["username"] == "admin" and data["password"] == "admin":
        access_token = create_access_token(identity=data["username"])
        return jsonify(access_token=access_token), 200
    return jsonify({"msg": "Bad username or password"}), 401

@app.route("/api/checkout", methods=["POST"])
@jwt_required()
def checkout():
    user = get_jwt_identity()
    order_data = request.json()
    return jsonify({
        "msg": f"Order placed successfully by {user}",
        "order": order_data
    }), 200

if __name__ == "__main__":
    app.run(debug=True)