import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BreastCancerPredict from "./pages/BreastCancerPredict";
import BreastCancerDetails from "./pages/BreastCancerDetails";
import PCOSPredict from "./pages/PCOSPredict";
import PCOSDetails from "./pages/PCOSDetails";
import UterusCancerDetails from "./pages/UterusCancerDetails";
import UterusCancerPredict from "./pages/UterusCancerPredict";
import UterusCancerRisk from "./pages/UterusCancerRisk";
import AnemiaPredict from "./pages/AnemiaPredict";
import AnemiaDetails from "./pages/AnemiaDetails";
import AnemiaCsvUpload from "./pages/AnemiaCsvUpload";
import CervicalCancerDetails from "./pages/CervicalCancerDetails";
import CervicalCancerPredict from "./pages/CervicalCancerPredict";
import CervicalCancerCsvUpload from "./pages/CervicalCancerCsvUpload";
import PeriodDetails from "./pages/PeriodDetails";
import PeriodRisk from "./pages/PeriodRisk";
import PeriodCsvUpload from "./pages/PeriodCsvUpload";
import HotspotMap from "./pages/HotspotMap";
import GovernmentDashboard from "./pages/GovernmentDashboard";
import DoctorPortal from "./pages/DoctorPortal";
import AshaPortal from "./pages/AshaPortal";
import UploadReport from "./pages/UploadReport";
import AIRiskEngine from "./pages/AIRiskEngine";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breast-cancer-details" element={<BreastCancerDetails />} />
        <Route path="/breast-cancer-predict" element={<BreastCancerPredict />} />
        <Route path="/pcos-details" element={<PCOSDetails />} />
        <Route path="/pcos-predict" element={<PCOSPredict />} />
        <Route path="/uterus-cancer-details"element={<UterusCancerDetails />}/>
        <Route path="/uterus-cancer-predict" element={<UterusCancerPredict />} />
        <Route path="/uterus-cancer-risk" element={<UterusCancerRisk />} />
        <Route path="/anemia-predict" element={<AnemiaPredict />} />
        <Route path="/anemia-details" element={<AnemiaDetails />} />
        <Route path="/anemia-csv-upload" element={<AnemiaCsvUpload />}/>
        <Route path="/period-details" element={<PeriodDetails />} />
        <Route path="/period-risk" element={<PeriodRisk />} />
        <Route path="/hotspot-map" element={<HotspotMap />} />
<Route path="/government-dashboard" element={<GovernmentDashboard />} />
<Route path="/doctor-portal" element={<DoctorPortal />} />
<Route path="/asha-portal" element={<AshaPortal />} />
<Route path="/upload-report" element={<UploadReport />} />
<Route
  path="/ai-risk-engine"
  element={<AIRiskEngine />}
/>
<Route path="/privacy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<Terms />} />
<Route path="/disclaimer" element={<Disclaimer />} />

        
        <Route
  path="/cervical-cancer-predict"
  element={<CervicalCancerPredict />}
/>
<Route path="/period-csv-upload" element={<PeriodCsvUpload />} />
        
        <Route path="/cervical-cancer-details" element={<CervicalCancerDetails />} />
        <Route path="/cervical-cancer-csv-upload" element={<CervicalCancerCsvUpload />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;