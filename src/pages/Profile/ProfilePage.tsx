import React, { useEffect, useState } from 'react';
import BannerWithInfo from './Partials/BannerWithInfo';
import Solution from './Partials/Solution';
import image from '../../asset/images/solution.png';
import './ProfilePage.scss';
import userAvatar from '../../asset/images/avatar.png';
interface DataItem {
  time: string;
  name: string;
  tech: string[];
  id: string;
} // TODO: implement

const Profile: React.FC = () => {
  const [dataSolution, setDataSolution] = useState<DataItem[]>([]);

  //  async/await lấy dữ liệu từ file data.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); //duong dan file data.json
        const result = await response.json();
        setDataSolution(result); // Lưu dữ liệu vào resutl state==>o ham [data,setData]
      } catch (error) {
        console.error('Error', error); // Xử lý lỗi
      } finally {
        // Sau khi tải xong thì tắt trạng thái loading
      }
    };

    fetchData(); // Gọi hàm fetchData
  }, []); // Chạy khi component mount ==> tim hieu

  return (
    <div className="profile-container">
      <h4>Profile Page</h4>
      <BannerWithInfo />
      <div className="list-solution">
        {/* ham map looop qua tung solution */}
        {dataSolution.map((solutionItem) => (
          <Solution
            key={solutionItem.id}
            image={image} // Hình ảnh mặc định
            name={solutionItem.name}
            time={solutionItem.time}
            tech={solutionItem.tech}
            userAvatar={userAvatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
