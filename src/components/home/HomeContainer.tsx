import successorIMG from "../../imgs/successor.png"
import munamiicakeryIMG from "../../imgs/munamii.png"

export function HomeContainer() {
    return (
        <div className="min-h-dvh w-auto grow flex flex-col">

            <div className="m-auto w-min mt-[141px]">

                <h1 className="text-[64px]/18">Erik Ljungman</h1> {/*className={styles.home_fullname_text}*/}
            </div>
            <div className="m-auto mt-8 w-max grid grid-cols-2 gap-[47px]">
                <img src={successorIMG} alt="Successor IMG" className="block reg-10-img"/>
                <img src={munamiicakeryIMG} alt="Successor IMG" className="block rounded-[22px] ring-3 reg-10-img"/>
            </div>
            <div className="m-auto w-max mt-6 mb-6">
                <h2 className="text-[32px]">Games and full-stack developer</h2>
            </div>

            <div className="w-[60%] grid grid-cols-2 grow-40 mr-auto mb-0 ml-auto bg-clr-30-1 rounded-sm ring-3 ring-clr-10-1">
                <div className="w-full h-96 grid col-auto">
                    <h2 className="text-center text-4xl pt-8">About me </h2>
                    <p className="pl-8 pr-8">
                        My name is Erik Ljungman. I'm a new full-stack developer based in Malmö, Sweden.
                        <br/> <br/>
                        My background is in Game development, mainly in C++, but now I'm learning full-stack development at Lexicon.
                        <br/> <br/>
                    </p>
                    <p className="text-center">Check out my projects here!</p>

                </div>

                <div className="w-full h-96">
                    <h2 className="text-center text-4xl pt-8">Contact </h2>
                </div>
            </div>
        </div>
    )
}

