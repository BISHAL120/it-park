import React from "react";
import './Social.css'
import card1 from "../../../images/card-1.png";
import card2 from "../../../images/card-2.png";
import mainCard from "../../../images/main-card.png";

const Social = () => {
  return (
    <div>
      <div className="Social">
        <div className="social">
          <div className="article-Heading">
            <h1>Social or Economic Enhancement</h1>
          </div>
          <div className="hr">
            <hr />
          </div>
          <div className="Health">
            <div className="first-row">
              <div className="Card">
                <div className="card-img">
                  <img src={card1} alt="" />
                </div>
                <div className="card-detail">
                  <div className="name-date">
                    <div className="post">Jack and Sekob</div>
                    <div className="v-line-1"></div>
                    <div className="post">12 Nov, 2023</div>
                  </div>
                  <h1>How to Break In Faster</h1>
                  <p className="paragraph-3">
                    It takes an average of six years for a screenwriter to sell
                    their first screenplay. Can you break in faster
                  </p>
                  <p>
                    <span className="paragraph-4">READ MORE</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L1 9"
                        stroke="#384AD3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </p>
                  <div className="interaction">
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15 10L14.507 9.918C14.4951 9.9896 14.4989 10.0629 14.5182 10.1329C14.5375 10.2029 14.5718 10.2678 14.6187 10.3232C14.6656 10.3786 14.724 10.4231 14.7899 10.4536C14.8557 10.4841 14.9274 10.5 15 10.5V10ZM4 10V9.5C3.86739 9.5 3.74021 9.55268 3.64645 9.64645C3.55268 9.74021 3.5 9.86739 3.5 10H4ZM6 20.5H17.36V19.5H6V20.5ZM18.56 9.5H15V10.5H18.56V9.5ZM15.493 10.082L16.299 5.247L15.313 5.082L14.507 9.918L15.493 10.082ZM14.82 3.5H14.607V4.5H14.82V3.5ZM11.694 5.059L9.178 8.832L10.01 9.387L12.525 5.613L11.693 5.059H11.694ZM7.93 9.5H4V10.5H7.93V9.5ZM3.5 10V18H4.5V10H3.5ZM19.812 18.49L21.012 12.49L20.032 12.294L18.832 18.294L19.812 18.49ZM9.178 8.832C9.04103 9.03747 8.85546 9.20594 8.63775 9.32247C8.42004 9.439 8.17693 9.49998 7.93 9.5V10.5C8.34153 10.5 8.74669 10.3984 9.10954 10.2043C9.47238 10.0101 9.78169 9.72938 10.01 9.387L9.178 8.832ZM16.299 5.247C16.3349 5.03214 16.3235 4.81203 16.2657 4.602C16.2079 4.39197 16.1051 4.19705 15.9643 4.03079C15.8236 3.86453 15.6483 3.73093 15.4507 3.63926C15.253 3.5476 15.0378 3.50008 14.82 3.5V4.5C14.8927 4.49989 14.9645 4.51562 15.0304 4.54609C15.0964 4.57656 15.1549 4.62104 15.202 4.67644C15.249 4.73184 15.2834 4.79682 15.3027 4.86686C15.3221 4.9369 15.3259 5.01032 15.314 5.082L16.299 5.247ZM18.56 10.5C18.7819 10.5 19.0011 10.5492 19.2017 10.6441C19.4023 10.7391 19.5793 10.8773 19.72 11.0489C19.8607 11.2205 19.9616 11.4212 20.0154 11.6365C20.0692 11.8518 20.0755 12.0764 20.032 12.294L21.012 12.49C21.0845 12.1274 21.0746 11.7533 20.9851 11.3946C20.8955 11.0359 20.7276 10.7015 20.4932 10.4155C20.2589 10.1295 19.964 9.89907 19.6299 9.74076C19.2958 9.58245 18.9307 9.50022 18.561 9.5V10.5H18.56ZM17.36 20.5C17.9381 20.5001 18.4983 20.2999 18.9454 19.9334C19.3925 19.5669 19.6987 19.0569 19.812 18.49L18.832 18.294C18.764 18.6343 18.5801 18.9404 18.3117 19.1603C18.0433 19.3802 17.707 19.5003 17.36 19.5V20.5ZM14.606 3.5C14.0296 3.49991 13.4621 3.64217 12.954 3.91414C12.4458 4.18611 12.0126 4.57937 11.693 5.059L12.525 5.613C12.7533 5.27062 13.0626 4.98989 13.4255 4.79573C13.7883 4.60158 14.1935 4.49999 14.605 4.5V3.5H14.606ZM6 19.5C5.60218 19.5 5.22064 19.342 4.93934 19.0607C4.65804 18.7794 4.5 18.3978 4.5 18H3.5C3.5 18.3283 3.56466 18.6534 3.6903 18.9567C3.81594 19.26 4.00009 19.5356 4.23223 19.7678C4.46438 19.9999 4.73998 20.1841 5.04329 20.3097C5.34661 20.4353 5.6717 20.5 6 20.5V19.5Z"
                          fill="#685F5A"
                        />
                        <path d="M8 10V20" stroke="#685F5A" />
                      </svg>
                      <span className="number">2,345</span>
                    </div>
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89472 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3 13.488 3.36 14.89 4 16.127L3 21L7.873 20C9.109 20.639 10.513 21 12 21Z"
                          stroke="#685F5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="number"></span>456
                    </div>
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.5714 8.57143L12.0251 4L7.42857 8.57143M12.0251 4.024V17.7143M8.57143 12H6.28571C5.67951 12 5.09812 12.2408 4.66947 12.6695C4.24082 13.0981 4 13.6795 4 14.2857V18.8571C4 19.4634 4.24082 20.0447 4.66947 20.4734C5.09812 20.902 5.67951 21.1429 6.28571 21.1429H17.7143C18.3205 21.1429 18.9019 20.902 19.3305 20.4734C19.7592 20.0447 20 19.4634 20 18.8571V14.2857C20 13.6795 19.7592 13.0981 19.3305 12.6695C18.9019 12.2408 18.3205 12 17.7143 12H15.4286"
                          stroke="#685F5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="number"></span>321
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="Card">
                <div className="card-img">
                  <img src={card2} alt="" />
                </div>
                <div className="card-detail">
                  <div className="name-date">
                    <div className="post">Jack and Sekob</div>
                    <div className="v-line-1"></div>
                    <div className="post">12 Nov, 2023</div>
                  </div>
                  <h1>How to Break In Faster</h1>
                  <p className="paragraph-3">
                    It takes an average of six years for a screenwriter to sell
                    their first screenplay. Can you break in faster
                  </p>
                  <p>
                    <span className="paragraph-4">READ MORE</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L1 9"
                        stroke="#384AD3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </p>
                  <div className="interaction">
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15 10L14.507 9.918C14.4951 9.9896 14.4989 10.0629 14.5182 10.1329C14.5375 10.2029 14.5718 10.2678 14.6187 10.3232C14.6656 10.3786 14.724 10.4231 14.7899 10.4536C14.8557 10.4841 14.9274 10.5 15 10.5V10ZM4 10V9.5C3.86739 9.5 3.74021 9.55268 3.64645 9.64645C3.55268 9.74021 3.5 9.86739 3.5 10H4ZM6 20.5H17.36V19.5H6V20.5ZM18.56 9.5H15V10.5H18.56V9.5ZM15.493 10.082L16.299 5.247L15.313 5.082L14.507 9.918L15.493 10.082ZM14.82 3.5H14.607V4.5H14.82V3.5ZM11.694 5.059L9.178 8.832L10.01 9.387L12.525 5.613L11.693 5.059H11.694ZM7.93 9.5H4V10.5H7.93V9.5ZM3.5 10V18H4.5V10H3.5ZM19.812 18.49L21.012 12.49L20.032 12.294L18.832 18.294L19.812 18.49ZM9.178 8.832C9.04103 9.03747 8.85546 9.20594 8.63775 9.32247C8.42004 9.439 8.17693 9.49998 7.93 9.5V10.5C8.34153 10.5 8.74669 10.3984 9.10954 10.2043C9.47238 10.0101 9.78169 9.72938 10.01 9.387L9.178 8.832ZM16.299 5.247C16.3349 5.03214 16.3235 4.81203 16.2657 4.602C16.2079 4.39197 16.1051 4.19705 15.9643 4.03079C15.8236 3.86453 15.6483 3.73093 15.4507 3.63926C15.253 3.5476 15.0378 3.50008 14.82 3.5V4.5C14.8927 4.49989 14.9645 4.51562 15.0304 4.54609C15.0964 4.57656 15.1549 4.62104 15.202 4.67644C15.249 4.73184 15.2834 4.79682 15.3027 4.86686C15.3221 4.9369 15.3259 5.01032 15.314 5.082L16.299 5.247ZM18.56 10.5C18.7819 10.5 19.0011 10.5492 19.2017 10.6441C19.4023 10.7391 19.5793 10.8773 19.72 11.0489C19.8607 11.2205 19.9616 11.4212 20.0154 11.6365C20.0692 11.8518 20.0755 12.0764 20.032 12.294L21.012 12.49C21.0845 12.1274 21.0746 11.7533 20.9851 11.3946C20.8955 11.0359 20.7276 10.7015 20.4932 10.4155C20.2589 10.1295 19.964 9.89907 19.6299 9.74076C19.2958 9.58245 18.9307 9.50022 18.561 9.5V10.5H18.56ZM17.36 20.5C17.9381 20.5001 18.4983 20.2999 18.9454 19.9334C19.3925 19.5669 19.6987 19.0569 19.812 18.49L18.832 18.294C18.764 18.6343 18.5801 18.9404 18.3117 19.1603C18.0433 19.3802 17.707 19.5003 17.36 19.5V20.5ZM14.606 3.5C14.0296 3.49991 13.4621 3.64217 12.954 3.91414C12.4458 4.18611 12.0126 4.57937 11.693 5.059L12.525 5.613C12.7533 5.27062 13.0626 4.98989 13.4255 4.79573C13.7883 4.60158 14.1935 4.49999 14.605 4.5V3.5H14.606ZM6 19.5C5.60218 19.5 5.22064 19.342 4.93934 19.0607C4.65804 18.7794 4.5 18.3978 4.5 18H3.5C3.5 18.3283 3.56466 18.6534 3.6903 18.9567C3.81594 19.26 4.00009 19.5356 4.23223 19.7678C4.46438 19.9999 4.73998 20.1841 5.04329 20.3097C5.34661 20.4353 5.6717 20.5 6 20.5V19.5Z"
                          fill="#685F5A"
                        />
                        <path d="M8 10V20" stroke="#685F5A" />
                      </svg>
                      <span className="number">2,345</span>
                    </div>
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89472 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3 13.488 3.36 14.89 4 16.127L3 21L7.873 20C9.109 20.639 10.513 21 12 21Z"
                          stroke="#685F5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="number"></span>456
                    </div>
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.5714 8.57143L12.0251 4L7.42857 8.57143M12.0251 4.024V17.7143M8.57143 12H6.28571C5.67951 12 5.09812 12.2408 4.66947 12.6695C4.24082 13.0981 4 13.6795 4 14.2857V18.8571C4 19.4634 4.24082 20.0447 4.66947 20.4734C5.09812 20.902 5.67951 21.1429 6.28571 21.1429H17.7143C18.3205 21.1429 18.9019 20.902 19.3305 20.4734C19.7592 20.0447 20 19.4634 20 18.8571V14.2857C20 13.6795 19.7592 13.0981 19.3305 12.6695C18.9019 12.2408 18.3205 12 17.7143 12H15.4286"
                          stroke="#685F5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="number"></span>321
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="v-line-2"></div>
            <div className="second-row">
              <div className="main-Card">
                <div className="main-card-img">
                  <img src={mainCard} alt="" />
                </div>
                <div className="main-card-detail">
                  <div className="name-date">
                    <div className="post">Jack and Sekob</div>
                    <div className="v-line-1"></div>
                    <div className="post">12 Nov, 2023</div>
                  </div>
                  <h1>How to Break In Faster</h1>
                  <p className="main-paragraph-3">
                    It takes an average of six years for a screenwriter to sell
                    their first screenplay. Can you break in faster
                  </p>
                  <p>
                    <span className="main-paragraph-4">READ MORE</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L1 9"
                        stroke="#384AD3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </p>
                  <div className="main-interaction">
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15 10L14.507 9.918C14.4951 9.9896 14.4989 10.0629 14.5182 10.1329C14.5375 10.2029 14.5718 10.2678 14.6187 10.3232C14.6656 10.3786 14.724 10.4231 14.7899 10.4536C14.8557 10.4841 14.9274 10.5 15 10.5V10ZM4 10V9.5C3.86739 9.5 3.74021 9.55268 3.64645 9.64645C3.55268 9.74021 3.5 9.86739 3.5 10H4ZM6 20.5H17.36V19.5H6V20.5ZM18.56 9.5H15V10.5H18.56V9.5ZM15.493 10.082L16.299 5.247L15.313 5.082L14.507 9.918L15.493 10.082ZM14.82 3.5H14.607V4.5H14.82V3.5ZM11.694 5.059L9.178 8.832L10.01 9.387L12.525 5.613L11.693 5.059H11.694ZM7.93 9.5H4V10.5H7.93V9.5ZM3.5 10V18H4.5V10H3.5ZM19.812 18.49L21.012 12.49L20.032 12.294L18.832 18.294L19.812 18.49ZM9.178 8.832C9.04103 9.03747 8.85546 9.20594 8.63775 9.32247C8.42004 9.439 8.17693 9.49998 7.93 9.5V10.5C8.34153 10.5 8.74669 10.3984 9.10954 10.2043C9.47238 10.0101 9.78169 9.72938 10.01 9.387L9.178 8.832ZM16.299 5.247C16.3349 5.03214 16.3235 4.81203 16.2657 4.602C16.2079 4.39197 16.1051 4.19705 15.9643 4.03079C15.8236 3.86453 15.6483 3.73093 15.4507 3.63926C15.253 3.5476 15.0378 3.50008 14.82 3.5V4.5C14.8927 4.49989 14.9645 4.51562 15.0304 4.54609C15.0964 4.57656 15.1549 4.62104 15.202 4.67644C15.249 4.73184 15.2834 4.79682 15.3027 4.86686C15.3221 4.9369 15.3259 5.01032 15.314 5.082L16.299 5.247ZM18.56 10.5C18.7819 10.5 19.0011 10.5492 19.2017 10.6441C19.4023 10.7391 19.5793 10.8773 19.72 11.0489C19.8607 11.2205 19.9616 11.4212 20.0154 11.6365C20.0692 11.8518 20.0755 12.0764 20.032 12.294L21.012 12.49C21.0845 12.1274 21.0746 11.7533 20.9851 11.3946C20.8955 11.0359 20.7276 10.7015 20.4932 10.4155C20.2589 10.1295 19.964 9.89907 19.6299 9.74076C19.2958 9.58245 18.9307 9.50022 18.561 9.5V10.5H18.56ZM17.36 20.5C17.9381 20.5001 18.4983 20.2999 18.9454 19.9334C19.3925 19.5669 19.6987 19.0569 19.812 18.49L18.832 18.294C18.764 18.6343 18.5801 18.9404 18.3117 19.1603C18.0433 19.3802 17.707 19.5003 17.36 19.5V20.5ZM14.606 3.5C14.0296 3.49991 13.4621 3.64217 12.954 3.91414C12.4458 4.18611 12.0126 4.57937 11.693 5.059L12.525 5.613C12.7533 5.27062 13.0626 4.98989 13.4255 4.79573C13.7883 4.60158 14.1935 4.49999 14.605 4.5V3.5H14.606ZM6 19.5C5.60218 19.5 5.22064 19.342 4.93934 19.0607C4.65804 18.7794 4.5 18.3978 4.5 18H3.5C3.5 18.3283 3.56466 18.6534 3.6903 18.9567C3.81594 19.26 4.00009 19.5356 4.23223 19.7678C4.46438 19.9999 4.73998 20.1841 5.04329 20.3097C5.34661 20.4353 5.6717 20.5 6 20.5V19.5Z"
                          fill="#685F5A"
                        />
                        <path d="M8 10V20" stroke="#685F5A" />
                      </svg>
                      <span className="number">2,345</span>
                    </div>
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89472 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3 13.488 3.36 14.89 4 16.127L3 21L7.873 20C9.109 20.639 10.513 21 12 21Z"
                          stroke="#685F5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="number"></span>456
                    </div>
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.5714 8.57143L12.0251 4L7.42857 8.57143M12.0251 4.024V17.7143M8.57143 12H6.28571C5.67951 12 5.09812 12.2408 4.66947 12.6695C4.24082 13.0981 4 13.6795 4 14.2857V18.8571C4 19.4634 4.24082 20.0447 4.66947 20.4734C5.09812 20.902 5.67951 21.1429 6.28571 21.1429H17.7143C18.3205 21.1429 18.9019 20.902 19.3305 20.4734C19.7592 20.0447 20 19.4634 20 18.8571V14.2857C20 13.6795 19.7592 13.0981 19.3305 12.6695C18.9019 12.2408 18.3205 12 17.7143 12H15.4286"
                          stroke="#685F5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="number"></span>321
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="v-line-2"></div>
            <div className="third-row">
              <div className="Card">
                <div className="card-img">
                  <img src={card1} alt="" />
                </div>
                <div className="card-detail">
                  <div className="name-date">
                    <div className="post">Jack and Sekob</div>
                    <div className="v-line-1"></div>
                    <div className="post">12 Nov, 2023</div>
                  </div>
                  <h1>How to Break In Faster</h1>
                  <p className="paragraph-3">
                    It takes an average of six years for a screenwriter to sell
                    their first screenplay. Can you break in faster
                  </p>
                  <p>
                    <span className="paragraph-4">READ MORE</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L1 9"
                        stroke="#384AD3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </p>
                  <div className="interaction">
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15 10L14.507 9.918C14.4951 9.9896 14.4989 10.0629 14.5182 10.1329C14.5375 10.2029 14.5718 10.2678 14.6187 10.3232C14.6656 10.3786 14.724 10.4231 14.7899 10.4536C14.8557 10.4841 14.9274 10.5 15 10.5V10ZM4 10V9.5C3.86739 9.5 3.74021 9.55268 3.64645 9.64645C3.55268 9.74021 3.5 9.86739 3.5 10H4ZM6 20.5H17.36V19.5H6V20.5ZM18.56 9.5H15V10.5H18.56V9.5ZM15.493 10.082L16.299 5.247L15.313 5.082L14.507 9.918L15.493 10.082ZM14.82 3.5H14.607V4.5H14.82V3.5ZM11.694 5.059L9.178 8.832L10.01 9.387L12.525 5.613L11.693 5.059H11.694ZM7.93 9.5H4V10.5H7.93V9.5ZM3.5 10V18H4.5V10H3.5ZM19.812 18.49L21.012 12.49L20.032 12.294L18.832 18.294L19.812 18.49ZM9.178 8.832C9.04103 9.03747 8.85546 9.20594 8.63775 9.32247C8.42004 9.439 8.17693 9.49998 7.93 9.5V10.5C8.34153 10.5 8.74669 10.3984 9.10954 10.2043C9.47238 10.0101 9.78169 9.72938 10.01 9.387L9.178 8.832ZM16.299 5.247C16.3349 5.03214 16.3235 4.81203 16.2657 4.602C16.2079 4.39197 16.1051 4.19705 15.9643 4.03079C15.8236 3.86453 15.6483 3.73093 15.4507 3.63926C15.253 3.5476 15.0378 3.50008 14.82 3.5V4.5C14.8927 4.49989 14.9645 4.51562 15.0304 4.54609C15.0964 4.57656 15.1549 4.62104 15.202 4.67644C15.249 4.73184 15.2834 4.79682 15.3027 4.86686C15.3221 4.9369 15.3259 5.01032 15.314 5.082L16.299 5.247ZM18.56 10.5C18.7819 10.5 19.0011 10.5492 19.2017 10.6441C19.4023 10.7391 19.5793 10.8773 19.72 11.0489C19.8607 11.2205 19.9616 11.4212 20.0154 11.6365C20.0692 11.8518 20.0755 12.0764 20.032 12.294L21.012 12.49C21.0845 12.1274 21.0746 11.7533 20.9851 11.3946C20.8955 11.0359 20.7276 10.7015 20.4932 10.4155C20.2589 10.1295 19.964 9.89907 19.6299 9.74076C19.2958 9.58245 18.9307 9.50022 18.561 9.5V10.5H18.56ZM17.36 20.5C17.9381 20.5001 18.4983 20.2999 18.9454 19.9334C19.3925 19.5669 19.6987 19.0569 19.812 18.49L18.832 18.294C18.764 18.6343 18.5801 18.9404 18.3117 19.1603C18.0433 19.3802 17.707 19.5003 17.36 19.5V20.5ZM14.606 3.5C14.0296 3.49991 13.4621 3.64217 12.954 3.91414C12.4458 4.18611 12.0126 4.57937 11.693 5.059L12.525 5.613C12.7533 5.27062 13.0626 4.98989 13.4255 4.79573C13.7883 4.60158 14.1935 4.49999 14.605 4.5V3.5H14.606ZM6 19.5C5.60218 19.5 5.22064 19.342 4.93934 19.0607C4.65804 18.7794 4.5 18.3978 4.5 18H3.5C3.5 18.3283 3.56466 18.6534 3.6903 18.9567C3.81594 19.26 4.00009 19.5356 4.23223 19.7678C4.46438 19.9999 4.73998 20.1841 5.04329 20.3097C5.34661 20.4353 5.6717 20.5 6 20.5V19.5Z"
                          fill="#685F5A"
                        />
                        <path d="M8 10V20" stroke="#685F5A" />
                      </svg>
                      <span className="number">2,345</span>
                    </div>
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89472 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3 13.488 3.36 14.89 4 16.127L3 21L7.873 20C9.109 20.639 10.513 21 12 21Z"
                          stroke="#685F5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="number"></span>456
                    </div>
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.5714 8.57143L12.0251 4L7.42857 8.57143M12.0251 4.024V17.7143M8.57143 12H6.28571C5.67951 12 5.09812 12.2408 4.66947 12.6695C4.24082 13.0981 4 13.6795 4 14.2857V18.8571C4 19.4634 4.24082 20.0447 4.66947 20.4734C5.09812 20.902 5.67951 21.1429 6.28571 21.1429H17.7143C18.3205 21.1429 18.9019 20.902 19.3305 20.4734C19.7592 20.0447 20 19.4634 20 18.8571V14.2857C20 13.6795 19.7592 13.0981 19.3305 12.6695C18.9019 12.2408 18.3205 12 17.7143 12H15.4286"
                          stroke="#685F5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="number"></span>321
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="Card">
                <div className="card-img">
                  <img src={card2} alt="" />
                </div>
                <div className="card-detail">
                  <div className="name-date">
                    <div className="post">Jack and Sekob</div>
                    <div className="v-line-1"></div>
                    <div className="post">12 Nov, 2023</div>
                  </div>
                  <h1>How to Break In Faster</h1>
                  <p className="paragraph-3">
                    It takes an average of six years for a screenwriter to sell
                    their first screenplay. Can you break in faster
                  </p>
                  <p>
                    <span className="paragraph-4">READ MORE</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L1 9"
                        stroke="#384AD3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </p>
                  <div className="interaction">
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15 10L14.507 9.918C14.4951 9.9896 14.4989 10.0629 14.5182 10.1329C14.5375 10.2029 14.5718 10.2678 14.6187 10.3232C14.6656 10.3786 14.724 10.4231 14.7899 10.4536C14.8557 10.4841 14.9274 10.5 15 10.5V10ZM4 10V9.5C3.86739 9.5 3.74021 9.55268 3.64645 9.64645C3.55268 9.74021 3.5 9.86739 3.5 10H4ZM6 20.5H17.36V19.5H6V20.5ZM18.56 9.5H15V10.5H18.56V9.5ZM15.493 10.082L16.299 5.247L15.313 5.082L14.507 9.918L15.493 10.082ZM14.82 3.5H14.607V4.5H14.82V3.5ZM11.694 5.059L9.178 8.832L10.01 9.387L12.525 5.613L11.693 5.059H11.694ZM7.93 9.5H4V10.5H7.93V9.5ZM3.5 10V18H4.5V10H3.5ZM19.812 18.49L21.012 12.49L20.032 12.294L18.832 18.294L19.812 18.49ZM9.178 8.832C9.04103 9.03747 8.85546 9.20594 8.63775 9.32247C8.42004 9.439 8.17693 9.49998 7.93 9.5V10.5C8.34153 10.5 8.74669 10.3984 9.10954 10.2043C9.47238 10.0101 9.78169 9.72938 10.01 9.387L9.178 8.832ZM16.299 5.247C16.3349 5.03214 16.3235 4.81203 16.2657 4.602C16.2079 4.39197 16.1051 4.19705 15.9643 4.03079C15.8236 3.86453 15.6483 3.73093 15.4507 3.63926C15.253 3.5476 15.0378 3.50008 14.82 3.5V4.5C14.8927 4.49989 14.9645 4.51562 15.0304 4.54609C15.0964 4.57656 15.1549 4.62104 15.202 4.67644C15.249 4.73184 15.2834 4.79682 15.3027 4.86686C15.3221 4.9369 15.3259 5.01032 15.314 5.082L16.299 5.247ZM18.56 10.5C18.7819 10.5 19.0011 10.5492 19.2017 10.6441C19.4023 10.7391 19.5793 10.8773 19.72 11.0489C19.8607 11.2205 19.9616 11.4212 20.0154 11.6365C20.0692 11.8518 20.0755 12.0764 20.032 12.294L21.012 12.49C21.0845 12.1274 21.0746 11.7533 20.9851 11.3946C20.8955 11.0359 20.7276 10.7015 20.4932 10.4155C20.2589 10.1295 19.964 9.89907 19.6299 9.74076C19.2958 9.58245 18.9307 9.50022 18.561 9.5V10.5H18.56ZM17.36 20.5C17.9381 20.5001 18.4983 20.2999 18.9454 19.9334C19.3925 19.5669 19.6987 19.0569 19.812 18.49L18.832 18.294C18.764 18.6343 18.5801 18.9404 18.3117 19.1603C18.0433 19.3802 17.707 19.5003 17.36 19.5V20.5ZM14.606 3.5C14.0296 3.49991 13.4621 3.64217 12.954 3.91414C12.4458 4.18611 12.0126 4.57937 11.693 5.059L12.525 5.613C12.7533 5.27062 13.0626 4.98989 13.4255 4.79573C13.7883 4.60158 14.1935 4.49999 14.605 4.5V3.5H14.606ZM6 19.5C5.60218 19.5 5.22064 19.342 4.93934 19.0607C4.65804 18.7794 4.5 18.3978 4.5 18H3.5C3.5 18.3283 3.56466 18.6534 3.6903 18.9567C3.81594 19.26 4.00009 19.5356 4.23223 19.7678C4.46438 19.9999 4.73998 20.1841 5.04329 20.3097C5.34661 20.4353 5.6717 20.5 6 20.5V19.5Z"
                          fill="#685F5A"
                        />
                        <path d="M8 10V20" stroke="#685F5A" />
                      </svg>
                      <span className="number">2,345</span>
                    </div>
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89472 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3 13.488 3.36 14.89 4 16.127L3 21L7.873 20C9.109 20.639 10.513 21 12 21Z"
                          stroke="#685F5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="number"></span>456
                    </div>
                    <div className="links">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.5714 8.57143L12.0251 4L7.42857 8.57143M12.0251 4.024V17.7143M8.57143 12H6.28571C5.67951 12 5.09812 12.2408 4.66947 12.6695C4.24082 13.0981 4 13.6795 4 14.2857V18.8571C4 19.4634 4.24082 20.0447 4.66947 20.4734C5.09812 20.902 5.67951 21.1429 6.28571 21.1429H17.7143C18.3205 21.1429 18.9019 20.902 19.3305 20.4734C19.7592 20.0447 20 19.4634 20 18.8571V14.2857C20 13.6795 19.7592 13.0981 19.3305 12.6695C18.9019 12.2408 18.3205 12 17.7143 12H15.4286"
                          stroke="#685F5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="number"></span>321
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view-all">
          <button>View all article</button>
        </div>
      </div>
    </div>
  );
};

export default Social;
