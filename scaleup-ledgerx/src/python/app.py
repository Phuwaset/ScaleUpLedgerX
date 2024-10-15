from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # เปิดใช้งาน CORS เพื่อให้สามารถรับข้อมูลจาก frontend (React) ได้

@app.route('/api/form', methods=['POST'])
def handle_form():
    data = request.get_json()  # รับข้อมูล JSON ที่ส่งมาจาก React
    print(data)  # แสดงข้อมูลใน console เพื่อเช็ค
    return jsonify({"message": "Form received successfully", "data": data}), 200

if __name__ == '__main__':
    app.run(debug=True)
