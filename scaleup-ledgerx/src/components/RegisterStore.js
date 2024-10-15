import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    storeName: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    address: '',
    country: 'ไทย',
    province: '',
    district: '',
    postalCode: '',
    vatRegistered: 'ไม่',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ส่งข้อมูลไปยัง backend หรือดำเนินการอื่น ๆ
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">สมัครสมาชิก</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">อีเมล</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">ชื่อร้าน</label>
          <input
            type="text"
            name="storeName"
            value={formData.storeName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">รหัสผ่าน</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">ชื่อ</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">นามสกุล</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">ที่อยู่</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">ประเทศ</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="ไทย">ไทย</option>
            <option value="อื่น ๆ">อื่น ๆ</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">จังหวัด/รัฐ</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">อำเภอ</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">รหัสไปรษณีย์</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">จดทะเบียนภาษีมูลค่าเพิ่มหรือไม่?</label>
          <div>
            <label>
              <input
                type="radio"
                name="vatRegistered"
                value="ใช่"
                checked={formData.vatRegistered === 'ใช่'}
                onChange={handleChange}
              />
              ใช่
            </label>
            <label className="ml-4">
              <input
                type="radio"
                name="vatRegistered"
                value="ไม่"
                checked={formData.vatRegistered === 'ไม่'}
                onChange={handleChange}
              />
              ไม่
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <span className="ml-2">ยอมรับ เงื่อนไขการให้บริการ และ นโยบายความเป็นส่วนตัว</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          บันทึก
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
