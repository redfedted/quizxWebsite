import { useEffect, useRef, useState } from "react";
import svg from "/src/svgs/Handshake.svg";
import img from "/src/images/ceopic.jpg";
import LazyLoad from "react-lazy-load";
function Contact() {
  const cardRef = useRef(null);
  const [visible, SetVisible] = useState(false);
  // const handleTimer = () => {
  //   const timer = () => {
  //     setTimeout(() => {
  //       SetVisible(false);
  //     }, 5000);
  //   };
  //   timer();
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      SetVisible(false);
    }
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);
  return (
    <section>
      <div className="mb-[1.875rem] mt-[2.563rem] flex flex-col items-center gap-[1rem] bg-[#CF0804] px-[2.959rem] py-[1.235rem] text-center lg:mb-[4.188rem] lg:flex-row lg:justify-center lg:gap-[5%] lg:px-[1.25rem] ">
        <button
          className={`border-1 flex items-center gap-[0.25rem] rounded-full border border-solid border-black bg-white px-[1.875rem] py-[0.734rem] text-[0.684rem] lg:text-[1rem]`}
          onClick={() => {
            SetVisible(true);
            // handleTimer();
          }}
        >
          <img src={svg} alt="" />
          <h1> Human assistance</h1>
        </button>

        <h1 className="text-[1.25rem] text-white lg:max-w-[55%] lg:text-start lg:text-[1.333rem]">
          Connect with our CEO for personalized guidance on integrating QuizX
          into your educational ecosystem.
        </h1>
      </div>{" "}
      {visible && (
        <div
          className="boder-solid duration-3000 fixed left-1/2 top-1/2 flex w-80 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-xl border-2 border-[#CF0804] bg-white py-4 "
          ref={cardRef}
        >
          <h1 className="pb-5 text-center text-2xl text-[#CF0804] ">Contact</h1>{" "}
          <button>
            {" "}
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-5 top-5"
              onClick={() => {
                SetVisible(false);
              }}
            >
              <path
                d="M12.9443 0.514648C19.5718 0.514648 24.9443 5.88723 24.9443 12.5146C24.9443 19.1421 19.5718 24.5146 12.9443 24.5146C6.31692 24.5146 0.944336 19.1421 0.944336 12.5146C0.944336 5.88723 6.31692 0.514648 12.9443 0.514648ZM12.9443 2.51465C7.42149 2.51465 2.94434 6.9918 2.94434 12.5146C2.94434 18.0375 7.42149 22.5146 12.9443 22.5146C18.4672 22.5146 22.9443 18.0375 22.9443 12.5146C22.9443 6.9918 18.4672 2.51465 12.9443 2.51465ZM8.62152 8.44604L8.73723 8.30754C9.08436 7.96041 9.62321 7.92184 10.0129 8.19183L10.1514 8.30754L12.9443 11.1006L15.7372 8.30754C16.0844 7.96041 16.6232 7.92184 17.0129 8.19183L17.1514 8.30754C17.4986 8.65467 17.5371 9.19352 17.2672 9.58326L17.1514 9.72176L14.3583 12.5146L17.1514 15.3075C17.4986 15.6547 17.5371 16.1935 17.2672 16.5833L17.1514 16.7218C16.8043 17.0689 16.2655 17.1075 15.8757 16.8375L15.7372 16.7218L12.9443 13.9286L10.1514 16.7218C9.80431 17.0689 9.26546 17.1075 8.87572 16.8375L8.73723 16.7218C8.3901 16.3746 8.35153 15.8358 8.62152 15.446L8.73723 15.3075L11.5303 12.5146L8.73723 9.72176C8.3901 9.37462 8.35153 8.83577 8.62152 8.44604L8.73723 8.30754L8.62152 8.44604Z"
                fill="#212121"
              />
            </svg>
          </button>
          <LazyLoad className="rounded-full pb-2" width={200}>
            <img src={img} />
          </LazyLoad>
          {/* <img className="pb-2 rounded-full" src={img} alt="" /> */}
          <h1 className="text-center text-[1.7rem]">CLINTON BAPTIST</h1>
          <a
            href="tel:+9179755 42541"
            className="flex items-center gap-2 pb-10"
          >
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.42034 0.304704C5.30743 0.183089 6.05276 0.725706 6.4055 1.43109L7.27367 3.16721C7.75534 4.13043 7.47888 5.26037 6.74834 5.97165C6.31746 6.39116 5.88415 6.87059 5.63258 7.29354C5.61887 7.31659 5.6105 7.35083 5.61821 7.39264C5.85038 8.6519 6.7041 9.89647 7.46543 10.7886C7.53351 10.8684 7.65318 10.9075 7.77691 10.8688L9.4878 10.3342C10.4339 10.0385 11.4621 10.394 12.0237 11.2107L13.2619 13.0117C13.5979 13.5002 13.7675 14.1633 13.5102 14.8006C13.2803 15.3698 12.8356 16.1914 12.027 16.7373C11.1878 17.3038 10.0382 17.519 8.5342 17.0032C6.85348 16.4268 5.26551 14.9806 3.94894 13.1309C2.6245 11.2701 1.53445 8.94537 0.873255 6.52149C0.248863 4.23253 0.626242 2.69244 1.51342 1.7C2.36939 0.742489 3.5961 0.417703 4.42034 0.304704ZM5.44314 1.91234C5.24678 1.51968 4.8957 1.32558 4.56649 1.37072C3.8344 1.47108 2.91759 1.74371 2.31561 2.41711C1.74483 3.0556 1.34981 4.17992 1.91131 6.23833C2.54156 8.54877 3.57966 10.7565 4.82555 12.507C6.07931 14.2685 7.50384 15.5123 8.88327 15.9854C10.1118 16.4068 10.9018 16.1987 11.4249 15.8455C11.9786 15.4717 12.3189 14.8771 12.5124 14.3977C12.6012 14.178 12.5631 13.8943 12.3753 13.6213L11.1371 11.8203C10.8429 11.3925 10.3043 11.2063 9.80874 11.3612L8.09785 11.8958C7.58668 12.0556 7.01069 11.9132 6.64697 11.4871C5.85467 10.5586 4.8453 9.13485 4.56006 7.58773C4.50798 7.30523 4.55294 7.00387 4.70781 6.74349C5.03385 6.19535 5.55044 5.63622 5.99773 5.20072C6.43461 4.77536 6.55839 4.14255 6.31131 3.64845L5.44314 1.91234Z"
                fill="#212121"
              />
            </svg>

            <h1>+91 79755 42541</h1>
          </a>
          <a
            href="mailto:clintonbaptist@thequizx.com"
            className="flex w-11/12 items-center justify-center gap-2 rounded-md bg-black py-3 text-center text-white"
          >
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8776 0.0981445C16.1255 0.0981445 17.1372 1.10979 17.1372 2.35771V10.7504C17.1372 11.9983 16.1255 13.0099 14.8776 13.0099H3.04179C1.79387 13.0099 0.782227 11.9983 0.782227 10.7504V2.35771C0.782227 1.10979 1.79387 0.0981445 3.04179 0.0981445H14.8776ZM16.0612 4.12275L9.21897 7.88623C9.07547 7.96516 8.90493 7.97393 8.75542 7.91254L8.70043 7.88623L1.85821 4.12275V10.7504C1.85821 11.4041 2.38812 11.934 3.04179 11.934H14.8776C15.5313 11.934 16.0612 11.4041 16.0612 10.7504V4.12275ZM14.8776 1.17413H3.04179C2.38812 1.17413 1.85821 1.70404 1.85821 2.35771V2.89527L8.9597 6.80084L16.0612 2.89484V2.35771C16.0612 1.70404 15.5313 1.17413 14.8776 1.17413Z"
                fill="white"
              />
            </svg>

            <h1 className="">Send email</h1>
          </a>
        </div>
      )}
    </section>
  );
}

export default Contact;
