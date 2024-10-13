import React, { useEffect, useState } from 'react';
import BannerWithInfo from './Partials/BannerWithInfo';
import Solution from './Partials/Solution';
import image from '../../asset/images/solution.png';
import imageCompany from '../../asset/images/solution.png';
import './ProfilePage.scss';
import userAvatar from '../../asset/images/avatar.png';
import CompanyFollow from './Partials/CompanyFollow/CompanyFollow';
import {
  CommandLineIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';
import { Challenge } from '../../components/common';
interface DataItemSolution {
  time: string;
  name: string;
  tech: string[];
  id: string;
} // TODO: implement
interface DataItemCompany {
  image: string;
  name: string;
  quantity: string;
  id: string;
}
const Profile: React.FC = () => {
  const [dataSolution, setDataSolution] = useState<DataItemSolution[]>([]);
  const [dataCompany, setDataCompany] = useState<DataItemCompany[]>([]);
  //  async/await lấy dữ liệu từ file data.json
  // data cua solution
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
  //data cua company
  useEffect(() => {
    const fetchDataCompanies = async () => {
      try {
        const response = await fetch('/dataCompany.json'); // Đường dẫn file dataCompany.json
        const result = await response.json();
        setDataCompany(result);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchDataCompanies();
  }, []);
  return (
    <div className="profile-container">
      <h4>Profile Page</h4>
      <BannerWithInfo />
      <div className="title-tag">
        <CommandLineIcon />
        <h4>Solution </h4>
      </div>
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
      <div className="title-tag">
        <BuildingOfficeIcon />
        <h4>Company Following </h4>
      </div>
      <div className="list-company">
        <Challenge
          name="Frontend Quiz app"
          bannerUrl="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wcxhsnz3foidwbzshiia.jpg"
          description="This app will test your skills (as well as your knowledge!) as you build out a fully functional quiz. We provide a local JSON file to help you practice working with JSON!"
          level="Diamond"
          difficulty="High"
          technicalList={['html', 'css', 'javascript']}
          score={120}
          tags={[
            {
              value: 'premium',
            },
            { value: 'new' },
          ]}
        />
        {dataCompany.map((companyItem) => (
          <CompanyFollow
            image={imageCompany}
            name={companyItem.name}
            quantity={companyItem.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
