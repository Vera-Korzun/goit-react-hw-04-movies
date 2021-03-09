import styled from "styled-components";

const Wrapper = styled.div`
  .homepage {
    padding: 20px;
    border-bottom: 2px solid #ffdab9;
    box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.51);
  }
  .homepage_title {
    text-align: center;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.63;
    color: #696969;
  }
  .trending__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 30px;
  }
  .trending__list-item:not(:last-child) {
    margin-bottom: 35px;
  }

  .trending__list-item {
    width: 250px;
    margin-right: 45px;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
      rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  .trending__list-item:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  .trending__list-link {
    font-weight: 400;
    font-size: 15px;
    line-height: 1.63;
    color: #696969;
    text-decoration: none;
    text-align: center;
  }

  .trending__list-title {
    margin: 15px;
    text-align: center;
  }

  .trending__list-link:hover {
    color: #ff7f50;
  }
`;

export default Wrapper;
