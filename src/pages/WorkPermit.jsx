import { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
const WorkPermit = () => {

  const [workPermitData, setWorkPermitData] = useState(null);
  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }

    fetchWorkPermitData();
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          I'm currently on a <strong>{workPermitData.visastatus}</strong> 🛂, which allows me to work in the USA! My visa is valid until <strong>{new Date(workPermitData.expirydate).toLocaleDateString()}</strong> 📅, giving me the opportunity to build valuable experience and grow my career here. 🌟
        </p>
        <p className="additional-info">{workPermitData.additionalinfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
