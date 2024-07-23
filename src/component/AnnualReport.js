
import { EmbedPDF } from "@simplepdf/react-embed-pdf";
const App = () => {
    var pdf = "https://drive.google.com/file/d/1h1E5xEGbyYzejVE8_BkqMkrdgpDT8WZ6/view?pli=1";
	
	return (<center>
		<div style={{width:'200px',height:'500px',padding:'10px',margin:'10px'}}>
			<EmbedPDF
  mode="inline"
  style={{ width: 200, height: 500 }}
  documentURL={pdf}
/>
			
		</div>
        </center>
	);
};

export default App;