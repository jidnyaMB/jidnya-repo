import { useState } from "react";
import Layout from "./components/Layout";
import { darkTheme, lightTheme} from "./styles/theme";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const currentTheme = isDark ? darkTheme : lightTheme;

  return(
    <div style= {{ backgroundColor: currentTheme.background, color: currentTheme.color, minHeight: '100vh', maxWidth: currentTheme.maxWdith}}>
      <button onClick= { () => setIsDark(prev => !prev)}>
        Toggle Theme
        </button>
        <Layout>
            <ProductShowcase/>
          </Layout>
          </div>
    
  )
}
export default App;
