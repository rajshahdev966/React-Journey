import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'

createRoot(document.getElementById('root')).render(
    <div>
      <h1>Hello World!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa et incidunt repudiandae reprehenderit corporis ducimus, rerum nihil obcaecati iusto. Quasi illo, debitis distinctio nobis tenetur quia ipsa, facere modi alias consequuntur cumque vitae quisquam. Delectus totam explicabo repellendus soluta vitae et iusto odit repellat, perspiciatis impedit consequuntur minima est, debitis commodi, temporibus culpa ea eius? Asperiores odio maiores dolorem deleniti ea enim facere officia unde! Culpa maiores perferendis vel voluptates nam? Facilis officiis quaerat harum earum maxime necessitatibus in ipsum aliquid impedit iste qui doloremque voluptas vero dolorum porro veritatis totam, velit, aspernatur voluptatibus, cupiditate ea! Temporibus, doloremque recusandae.</p>
      <App></App>
      <About name = "Raj" age = {90}>
        <h3>I am in Main but a children of About</h3>
    </About>
    </div>


)
