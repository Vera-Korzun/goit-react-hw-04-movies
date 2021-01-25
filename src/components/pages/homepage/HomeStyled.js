import styled from "styled-components";

const Wrapper = styled.div`
  .homepage {
    padding: 20px;
    border-bottom: 2px solid #ffdab9;
    box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.51);
  }
  .homepage_title {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.63;
    color: #696969;
  }
  .trending__list {
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 30px;
  }
  .trending__list-item:not(:last-child) {
    margin-bottom: 10px;
  }
  .trending__list-link {
    font-weight: 400;
    font-size: 15px;
    line-height: 1.63;
    color: #696969;
    text-decoration: none;
  }
  .trending__list-link:hover {
    color: #ff7f50;
  }
`;

export default Wrapper;
