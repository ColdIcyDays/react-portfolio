import {Link} from "react-router-dom";
import * as emailjs from "@emailjs/browser";
import {useRef} from "react";

export function ContactContainer() {

    const form = useRef<HTMLFormElement>(null);

    function SendEmail(aEvent : React.SyntheticEvent<HTMLFormElement>) {
        aEvent.preventDefault();

        const formData = new FormData(aEvent.currentTarget);
        console.log(formData);
        const foundData = Object.fromEntries(formData.entries());
        console.log("FoundData" + foundData["name"]);



        if (form.current !== null)
        {
            /*console.log(form.current)
            console.log(form.current.data)*/
            emailjs.send("service_e301b9s","template_portfolio_form", foundData, "R30HDcPHz8rV1U77T")
                .then( /* Do stuff */);
        }

    }

    return (
      <div className='min-h-dvh w-auto grow flex flex-col'>
          <div className='reg-top-titlediv'>
              <h1 className='reg-top-titlediv-text'>Contact me</h1>
          </div>
          <div className='flex flex-row mt-[48px]'>

             {/* <div className='m-auto grow'>
                  <img className='reg-10-img m-auto' src={profilePic}/>
              </div>*/}

              <div className='flex flex-col reg-30-div w-3/4 ml-auto h-[256px] p-8'>
                  <div className='w-1/2'>
                      <h1 className=' text-5xl'>Got some work?</h1>
                      <p className='pt-4 text-2xl '>Reach out on my socials or email below!</p>
                  </div>

                  <div className='mt-auto'>
                      <p>erik.ljungman@gmail.com</p>
                      <Link to={'https://www.linkedin.com/in/erik-ljungman/'} target={"_blank"} rel='noopener noreferrer'>
                        <p>Linkedin</p>
                      </Link>
                  </div>

              </div>
              </div>

              <div className='reg-30-div w-1/2 h-[596px] max-h-[596px] mt-[48px] ml-auto flex flex-col'>
                  <div>
                      <div className='w-full p-8'>
                          <h1 className=' text-5xl'>Send me an email!</h1>
                      </div>
                  </div>
                  <form ref={form} className='flex flex-col grow' onSubmit={SendEmail}>
                      <div className='mx-8 mb-8 grow flex flex-col w-1/2'>
                          <label className='text-white'>Your name</label>
                          <input name={"name"} type={"text"} placeholder={"Your name"} className='mb-8 ring-1 bg-white ring-clr-10-2 w-full rounded-md px-4 py-2 mt-2 outline-none focus-ring-2 focus:ring-clr-10-1'/>

                          <label className='text-white'>Email Address</label>
                          <input name={"email"} type={"email"} placeholder={"Email Address"} className='mb-8 ring-1 bg-white ring-clr-10-2 w-full rounded-md px-4 py-2 mt-2 outline-none focus-ring-2 focus:ring-clr-10-1'/>

                          <label className='text-white'>Message</label>
                          <textarea name={"message"} placeholder={"Your Message"} className='resize-none grow ring-1 bg-white ring-clr-10-2 w-full rounded-md px-4 py-2 mt-2 outline-none focus-ring-2 focus:ring-clr-10-1'/>
                      </div>

                        <input type={"submit"} value={"Send"} className='std-button max-w-[128px] max-h-[64px] mt-auto ml-4 mb-4'/>
                  </form>
              </div>

      </div>
    );

    /*return (
        <div className={styles.contact_container}>
            <div className={styles.contact_content_container}>
                <div className={styles.contact_content_side_contactinfo_container}>
                    <div className={styles.contact_content_side_contactinfo_compartment}>
                        <h3>Contact</h3>
                        <h1>Reach out to me!</h1>
                        <p>I live in the Malmö area </p> <h2>(add address)</h2>
                    </div>

                    <div className={styles.contact_content_side_contactinfo_compartment}>
                        <a href={"https://www.linkedin.com/in/erik-ljungman"}>Linkedin</a>
                    </div>
                </div>

                <div className={styles.contact_content_side_container}>
                </div>
            </div>
        </div>
    );*/
}