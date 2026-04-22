import {Link} from "react-router-dom";
import profilePic from '../../imgs/profile_picture.jpg'

export function ContactContainer() {
    return (
      <div className='min-h-dvh w-auto grow flex flex-col'>
          <div className='reg-top-titlediv'>
              <h1 className='reg-top-titlediv-text'>Contact me</h1>
          </div>
          <div className='flex flex-row items-center mt-[256px]'>

              <div className='m-auto grow'>
                  <img className='reg-10-img m-auto' src={profilePic}/>
              </div>

              <div className='flex flex-col reg-30-div w-[512px] ml-auto h-[256px] p-8'>
                  <div>
                      <h1 className='text-center text-5xl'>Got some work?</h1>
                      <p className='pt-4 text-2xl text-center'>Reach out on my socials or email below!</p>
                  </div>

                  <div className='mt-auto'>
                      <p>erik.ljungman@gmail.com</p>
                      <Link to={'https://www.linkedin.com/in/erik-ljungman/'} target={"_blank"} rel='noopener noreferrer'>
                        <a>Linkedin</a>
                      </Link>
                  </div>

              </div>
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