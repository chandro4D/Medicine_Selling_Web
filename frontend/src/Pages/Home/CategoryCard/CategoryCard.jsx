import { Link } from "react-router-dom";
import useProducts from "../../../Hook/useProducts";


const CategoryCard = () => {
    const [products] = useProducts();
    const babyCare = products.filter(item => item.Category === 'babyCare');
    const tablet = products.filter(item => item.Category === 'tablet');
    const capsule = products.filter(item => item.Category === 'capsule');
    const womensCare = products.filter(item => item.Category === 'womensCare');
    const syrup = products.filter(item => item.Category === 'syrup');
    const injection = products.filter(item => item.Category === 'injection')
    return (
        <div className="grid grid-cols-2 lg:w-[1300px]  sm:w-[500px] text-2xl lg:mx-[85px] mb-20 uppercase">
            <Link to='/babyCare'>
                <div className=" h-[250px] mr-5 mb-5 rounded-xl bg-gradient-to-r from-indigo-500  to-pink-500">
                    <p className="pt-2 text-center  font-bold text-white">Baby Care</p>
                    
                    <p className="text-center  font-bold text-white mb-2">Total Items : {babyCare.length}</p>

                    <img className="w-full h-[170px] " src="https://i.ibb.co/VmQ6QfX/Baby-Care.webp" alt="" />
                </div>
            </Link>
            <Link to='/womenCare'>
                <div className="h-[250px] mb-5  rounded-xl bg-gradient-to-r from-indigo-500 from-10%  to-emerald-500 to-90% ">
                    <p className="pt-2 text-center  font-bold text-white">Womens Care</p>
                    <p className="text-center mb-2 font-bold text-white">Total Items : {womensCare.length}</p>

                    <img className="w-full h-[170px] ml-5" src="https://i.ibb.co/nMq0phV/Womens-Care.webp" alt="" />
                </div>
            </Link>
            <Link to='/TabletA'>
                <div className=" h-[250px] mr-5 mb-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                    <p className="pt-2 text-center  font-bold text-white">Tablet</p>
                    <p className="text-center  font-bold text-white">Total Items : {tablet.length}</p>
                    <img className="h-[178px] ml-16" src="https://i.ibb.co/qmqcq8x/All-Medicine.webp" alt="" />
                </div>
            </Link>
            <Link to='/capsule'>
                <div className=" h-[250px] mb-5 rounded-xl bg-[url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw8PDQ0NDw8NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGCsdHR4tLSstLS0rKysrLS0tLSstLSsrLS0tLS0tListLS0rKy0tLS0tLSstKystLS0tLS0tLf/AABEIAK4BIgMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EADsQAAICAAMFBgMECQUBAAAAAAABAgMEESEFEjFBYQYTUXGBoSIykUJSYsEHFDNDcpKx0fEjU4Ki8BX/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QALxEBAAIBAgQEBQQCAwAAAAAAAAECEQMEBRIhMRMiQVEyQmFxkaGx0eEUwSOB8f/aAAwDAQACEQMRAD8A+ymxzmQCAaAYZGAyAAYAAAMKAABkUBTAAAAAAAACgACAAAQAEIqEAgEEJlCAiwxlECSKAgYDQWDCmAyAAYAABTAAABkUBTAAAAAAoAAAACAAAQCCBlQgEAghMoQEWGMogSRQEDAaCwYUwGQADAAAKYAAIBkUBTAAM2Mx9NKztsjDPgm/ifkuLM6adr/DGWnV19PSjN7RDny7TYVc5vqoPL3N0bTUcs8T28es/hdhNv4W2W5G6Kl92fwNv1ML7fUrGZhs0uIbfUnlreM/Xo6ZpdgCgACEAAACCEVAAgEEIoTAgwkkESRQEDAaCwYUwGiAAAGABTAAAgYUBTA8n2r7Vdw3Rh2nd9ufGNXReMv6Hdttpz+a3Z4vEuKeD/x6fxft/bxNTd1mdk5SlJvOUnnJv1PVxFK+WHy8TOtqeeZmZdpYCvd4y4cd9mjxLZeh/i6ePX8uJjIRjNqOeS8ddTorOY6vM1axW8xDtdnO1FmHkq7m7KHprrKrqunQ5NxtIvGa9Jevw7it9GYpqTmv6w+jVWxnFSi1KMkpRknmmnzPHmJicS+traLRExOYlIjIBAAAACCEVCAGEIBMoiwIsJJBEigIGBJBTCgBkAAAMACmAAADIyAHK7T7U/VcNOxfO8q6/wCN8/TV+hu2+l4l4hx77ceBozeO/aPu+Tb7k8225Sbbb1bbPeiMQ+IvM2mZlek4ta6rXyL3a5zWVkr5/el9WOWDxLz6yLZ72r+bg+vURGC1ubrPdU0Vjl6Lsj2ieGkqbn/oSejf7mT5/wAJw7vbc8c1e/7vd4VxLwZ8PUnyz+n9PoyeazWqazTXBo8d9YAGAgABMIRUIACEwEURYEWEkgiSKBEDAkgyADAZAAADAAoAYAQAZGB4X9KFzSw0OTds/VJL8z0NhHW0vC43PlpH3eIwOs4rlxfkelaej5+tc2h2LYKfHR8muRhWcNuppxfuxSi08nxN0Tl59qzWcSRWIAUkFiXruxnaPcccLfL4XpTOT+V/cb8PA8zebb56/wDb6XhPEsY0dWftP+nujzH0gAAABBCKhAAQgEyiLAiwkkESKBEDQEkGQAYAQMAAAGFAAAwAjIwPE/pRwrlh6bl+6tcZdIzWj+qX1O3Y2xeY93kcX0+bSi3tP7vneFv3WmuKPUnq+bnNZzDt02prNf4NbfExMZW21qa6rgzKtsNWrpxaGNrJ5PijfE5efasxOJIIAFKIWJw932N7R96lhr5f6qWVc3+9ivsv8S9zyN3tuWeevZ9bwriXixGlqT5o7fX+3rTge4AEAMIRUIBBAAiiLAiwkkESKAgYDDIwGgAgYAAAMKAABgBFMKybVwUMRRZTZ8lkHFt/ZfJ+jMqWmtomGvV041KTW3aXw3aODnhrp0zyzhJrNfLJcpLoz3NPUi9cw+T19GdO01n0acBicsl9PDyMrQ5o6S69Vn/vBmDb3Suq3lmvmXv0M62w06ulzR07sa8Dc4JjAYQACbTUotpppprRp+JJiJjEs6Xms5h9G7KdoFiod3Y0r4LXl3kfvL8zxd1t/CnMdpfZ8N4hG5ry2+KP1+r0ByPUACDEFCAQQgEUJgRYSSCJACAaAYZGA0AEDAAABhQBTiMXVWs7LIQX4pJGVaWt2jLC+rSkZtMQ5OJ7VYaPyb9r/BHKP8zyRvrtNSe/Rw34noV+HNvt/Lj4vtla/wBnXXX1nJ2S+iyR0V2NfWcuLU4zf5axH36rdm9ru9kq7Wq5PSMorKEn4a8Ga9bZzSOavWG/Z8VrrW5L9J/SWnH4zJPVvzbZy4epMvn3avEd403HWOilz3fA6NHV8Ofo493t41q9O8dnAqsPUi2YfOXpMTiXZwOK3tPtJfzL+5JhjEy6VVhiy7o4qvP4l6/3NlLejl19PPmhQtTa4yA7Gyez1+Iyll3df35rj5LmcmtvKU6R1l6+04Pq63mv5a/r+HpcL2WppcZxlZ3sWnGxTcWn5LQ87U3WpfpPZ9DocM0NHE1icx656vTV2KSz+vRnK9FMBFQgABBCARQmBFhJLMIYDAaBBhkYDACAAU5qKbk0kuLbySLEZJmIjMuTiu02EreSs7yX3alv6+fA6K7XUt6Y+7g1OJ7ek45sz9Orl4ntbN/sqox62y3n9I/3N9dlHzS4tTi9vkrj7z/qP5cfF7dxE/mvkl92vKqPtr7nTTbUjtDz9XiOrbvf8dP7cx27zzjFyfjk5P6s38sR3cXizacxGTdNsvCPm837DNYXk1bd+iMsGuMpv2iic/tC/wCPHzSwYycI6QS/i4/QyiJnuxmaxOK/l3NjbRd9TjN52V5RbfGUeTPL3Gl4dunaX0+w3PjafXvHdztr4XPM0O15PE1OuX4X7HRt9blnlns4N7tfEjnr3/dZRc0009Vqejl4Nqu5hcRvLeX/ACXg/FGMwmfX8/y31zIywospamlFN77yilq2/A2xeIjM+jjtt7WvFaRnPZ7HYHZmMcrL0pT4qvjGPn4s8vcbub+WvSH0vD+E00MX1PNb9IenSyOJ7JgQ1i816rxQGmM01muBFMqABAAQmAihMCLCSQQwGA0Fg0FMAAZBi2ttKvC1O2zlpGK+acuSRs0tKdS3LDn3O4pt9Ob3/wDXzja22bsVLOyWUM/hri8oRX5vqe1o7emnHTu+P3e/1dxPmnEe3oWz8G5/EpZcVwzM73x0w17fQm/micNr2cl81kn0WSNXi+0Or/Ej5rTKLrpr1yXnJ5v3Lm1jk0dNRbtKC+VZ+yMo059WFt1WPhhiu2hN8Ml5aszikQ0W3F5+jHZY3xbfmzLpDXmZ7oOmT5P10RjNobK0n2T2Zc6cRDN6T+B5cNeHvkc25rzaefZ6nDrzp6sRPr0ehxsc0eW+jea2jh08wsOE4uDy5cjs2+v8svJ320x/yV7erbgsTuv+p293j2iYnMO1Tbw3U5KTySWst58kYzOI6+i1rMzEVjOf3e77ObHVSVlqTukvNVRf2V+bPL19edScR2fS7PZ10IzPW09/4h34vI53asAAACEZbj6PivzA0pgAAAggARREBMJJBDAYDQWDCgBgBB837abS73FOtPOFHwJcnP7T+unoexs9Plpn1l8nxfXnU1uSO1f3cWmtyza4LU7M4eRyTPZdh8TOC+F5ZsTWJ7lNW2n8KVu0LXxl7Ix8OsNn+TqW9WT4pPm+vEyzEMIrNvqsWGlzyXuzGbw2xoSmsPFcW37Iwm8tsaNY7jeiuCS9DGZltisR2hTZaGUQ5uOuScXzjJNdMmJ6xMMqTi8T7PWykpRT8UmeM+siMuTjIEyuHJvw0Xx9iZXEernX1OEvwvh06HpbfX54xPd4O92nhzzV7S9j2Fwyk+/nqotxqT4Z8HP8vqaN3q5nlh1cM2sUjxJ7z2fQKrPocT1mqLzAlCQFgAANZgRhLdeT+V+zA0AIIAEAihAJhJRCJAMAQWEgoAAAg+MY+1yutb4u6x/9me/pfBD4fcddW8z7y6OAnu1rxlm30XgS3WWelHLT7qcXanYlpw1ZnXpDRrRE2ZZWpTXBpNdVkZT2a6ViJb5zy0NDuxhTO7Ljp5gZrMUvPyLiWPPEKLMS+Sy89S4Tnn0hlstfNlTMyxX3LwMZlupSXssPdnVDP7kf6Hi27y+up8MfZkxFiMcsnPskBW6t9OOWaZYtNZzBekXrNZ7S9J2bUqqo1y+y2ovxWeevUWtmcpWvLEV9nqcHiM9GRk6NVmRBoz5r/IFkJATAACUcwFVPL4X6f2AuCEAAIoQEWEkgiQAAwsGFADAWYHxvtFh3TjL4P/dlNdYye8v6ntaF+akPkN7pcmtaPrn8nXa4xjlqsuHgZ9Jc2bViPWGa63ObZnHRrt5uqiyepcrWrS75vXeyzXI14htzefVTKS5v3LlOWPVXO5IL9mazEImWcUmWO7FGM2bqaTL3jnJRXGTS+pqtfEZdWno5mIeyVjyUVnokjyZnL6SK4jCHcSlx0JlcLa8EuevmTKtlWGy5BW7D15Fhi31TcGk/R+JUdfC35rIg3VWcgLc8teQF8JASAIhVd+qAspnvRT58H5himAMoQCYCYSSCGgGA0FgwoAAE2B4j9IuxXZGOKqWc647tqXGVfKXodm11eWeWfV5XEtrzx4le8d/s8Hh8Xpk+R6LwMY6Izt1zLlr5VNlgyzrUSxXUmWUUlmsxZjzNldFltxnUxm7dXRVx7yfyxk+vBe5qtqxDqptrT6Lq9lWS+aSj0XxM0zrezrrtPeXotj7FqhlNJua0zk82vI5dTUtPSXfo6OnXrEdXbhhehqdC6OHGBZGgYFsKhgX1wA201Ka3Xz4Pmn4hjKqLlVPclo19JLxRR1sPdvLqQa67M9GBKM8nkBodmiCrN4is98ipJ4GWe/0l+QRqCAoQCATCSiESQDAYUwpAAEWBRbLR58OYSXzDtdsGuM3Zhmo5tuVT+XP8L5eR26W4mIxZ5W42NbTmnT6PHXSshpKEl6Zr2OmNas+rhnaXj0U99N8Iyf8AxYnVj3K7W3sshhLpct3+JmudePR002VvXo01bGb+aTfRaI1TrWl012tI79W/D7JhHhFebWbNczM95b61rXtDdXguhMLlohg+gTLo7PoyZheG3Ts6qoNTeHUQRcADIqrIBMt2DWoRuxmDV0MuE46wl4PwfQDj4e6UJOMllKLyaCuvVbmsyCUrdQLe90AuV2i8gqi+0DTs5fBvP7UnL04II1hAUACATCSiESQDAYZAAAAIsDnbRsyizKsNdpeRx9Tk3mbcNEy5Nuz8+RVyp/8AnLwIZWQ2f0KmWiGB6AaIYIIujhOgFqwxBbTTkySzr3dGMNDTLpiUJwIrPNFRSwLaolHTwsAOjAgxbVwPeLfj+0iv5l4MDl4XF5aPTk0+KZFau/T1AtV+gEpYtJAGFhK6X4V8z6eCA7sdMkuCWXoESAZQgACLCEESAYWDCmAAAEZBHK2gszZVpu41tGZtameeGIIfqwwJxwwFscOQTVIVNVAPuigjWSWVWhI1TDdEqrAyyzWIYTKlxGDK6mJFh0KCK1xsIIWXAcXaiUnvLSXiuEvMK5f67KPFMLhOO0M/EGGrCNza3s1HpxYR6vBuKilFZLwKjWiCaAYAUIBMBBiYDDIwGAABBGZUlgxUczZDVZz51GxqVSqCId0USjURU1UQTVYU+7BgOoZMF3ZGUQbiYs4U2Ii5ZpxKmUFALDTVWYSzhqrgYqtyAqsgFY7sPmBjswKfIYUV7PXgMK2U4XIJLqYPNFYulEgmAwAoQCAQQ0ESDIAMAAZBGRUZromcMLQxzrM4lqmFTgVEdwIkqwuE1UTK4TVRMrhJVEyuB3YyuEXWMmFcoBWecAiiUCgjWRYaaqzCWyGqMDFUtwKTqATpAqlhwHHDgXRoCrIV5FRsgREgAAKEAgAIaAYUAMBgBAmUVTRYYzCiUDLLCYVusuWOC7sZMJKsZXCagTK4SUBlcHukyuCcRlMISiVFM4gUTiVFTgVEowIyhprgYS2Q0RgYsktwKfdgwO7Ai6wYONYFigFLdDGVsQiQAAihADAQDQDAAGAwAgRRGSCSg0VEN0uWOBugwe6MrhJRIp5AGQCaArkipKmaKxUyRUVuJUSiiMoaK0YyzhfExZpoimFPIYBkAIBsIjkETQRIBAIoTAGAgP/Z)]">
                    <p className="pt-2 text-center  font-bold text-sky-500">Capsule</p>
                    <p className="text-center  font-bold text-sky-500">Total Items : {capsule.length}</p>

                </div>
            </Link>
            <Link to='/injection'>
                <div className=" h-[250px] mr-5 rounded-xl  bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRcyZ_Mwysa1_x6gvvjonbK8DCs4lwW93Zw&s)]">
                    <p className="pt-2 text-center  font-bold text-white">Injection</p>
                    <p className="text-center  font-bold text-sky-500">Total Items : {injection.length}</p>
                    <img className="h-[200px]" src="" alt="" />
                </div>
            </Link>
            <Link to='/SyrupA'>
                <div className="text-sky-500 h-[250px] rounded-xl bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TLjT3U5WeSXtHz5GFrrUPBE9Ext6wngaGQ&s)]">
                    <p className="pt-2 text-center  font-bold text-slate-500">Syrup</p>
                    <p className="text-center  font-bold text-slate-500">Total Items : {syrup.length}</p>
                    <img src="" alt="" />
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;