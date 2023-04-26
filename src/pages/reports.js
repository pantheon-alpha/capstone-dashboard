import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { CiSearch } from "react-icons/ci"
import {AiOutlineDownload} from "react-icons/ai"
import Sidebar from "../widgets/Reports/Sidebar"

const Container = styled.section`
  background-color: ${p=> p.theme.primaryBg};
  flex: 3;
  padding: 2rem;
  margin-left: 20vw;
  margin-right: 20vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  padding: 1rem 0rem;
    
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;
`
const Title = styled.h3`

  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: ${p=>p.theme.textPrimary};
`
const SearchBar = styled.div`

  display: flex;
  align-items: center;


  
  input {
    padding: 0 0 .3rem .3rem;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    background-color: transparent;

    color: ${p=> p.theme.textPrimary};
    opacity: .5;
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: ${p=> p.theme.textPrimary};
    opacity: .5;
  }

  svg {
    margin-right: .5rem;
  }

  border-bottom: 1px solid #9F9F9F;
  width: 50%;
`
const SearchIcn = styled(CiSearch)`
  color: ${p=> p.theme.textPrimary};
  opacity: .5;

  font-size: 1rem;
  margin-bottom: .3rem;
`

const ReportSection = styled.div`
  margin-top: 1rem;
  padding: 1rem 0rem;
`

const SectionHeader = styled.div`
  padding: 1rem 0rem;
  //border-bottom: 1px solid #9F9F9F;
  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${p=>p.theme.textPrimary};
  }
`

const ReportRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;

`

const ReportCard = styled.div`
  width: 50%;
  height: 100px;
  //background-color: ${p=>p.theme.secondaryBg};
  border-radius: 5px;
  margin-bottom: 1rem;
`

const CardTitle = styled.div`
  padding: 1rem 0rem;
  //border-bottom: 1px solid #9F9F9F;
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: ${p=>p.theme.textPrimary};
  }

`

const CardBody = styled.div`
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: right;

`

const DateDropdown = styled.div`
  select {
    padding: 0 0 .3rem .3rem;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    /* identical to box height */

    text-align: center;
  }

  select:focus {
    outline: none;
  }

  select::placeholder {
    color: ${p=> p.theme.textPrimary};
    opacity: .5;
  }

  align-items: center;
  justify-content: center;
  margin-right: 1rem;

  border: 0.5px solid #828383;
  border-radius: 5px;
`

const DownloadIcn = styled(AiOutlineDownload)`
  color: #FFFFFF;
  //margin-bottom: .2rem;

  margin-right: .2rem;
  height: 12px;
  width: 12px;
`

const DownloadBtn = styled.div`

    background: #66D998;
    border-radius: 50px;
    width: fit-content;
    padding: .3rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 500;
    font-size: 10px;

    color: #FFFFFF;

    cursor: pointer;

`


const Reports = () => (
  <Layout>
    <Container>
        <Header>
            <Title>Reports</Title>
            
        </Header>
        <SearchBar>
            <SearchIcn/>
            <input type="text" placeholder="Search"/>
        </SearchBar>

        <ReportSection>
            <SectionHeader>
                <h4>Tax Fillings</h4>
            </SectionHeader>
            <ReportRow>
                <ReportCard>
                  <CardTitle>
                    <h5>
                      KYC Form
                    </h5>
                  </CardTitle>
                  <CardBody>
                    <DateDropdown>
                      <select>
                        <option>Jan 2021 - Feb 2022</option>
                        <option>Jan 2019 - Feb 2020</option>
                        <option>Jan 2020 - Feb 2021</option>
                        <option>Jan 2018 - Feb 2019</option>
                        <option>Jan 2022 - Feb 2023</option>
                      </select>
                    </DateDropdown>
                    <DownloadBtn>
                      <DownloadIcn/>
                      Download
                    </DownloadBtn>
                  </CardBody>
                </ReportCard>

                <ReportCard>
                  <CardTitle>
                    <h5>
                      Tax Forms
                    </h5>
                  </CardTitle>
                  <CardBody>
                    <DateDropdown>
                      <select>
                        <option>Jan 2021 - Feb 2022</option>
                        <option>Jan 2019 - Feb 2020</option>
                        <option>Jan 2020 - Feb 2021</option>
                        <option>Jan 2018 - Feb 2019</option>
                        <option>Jan 2022 - Feb 2023</option>
                      </select>
                    </DateDropdown>
                    <DownloadBtn>
                      <DownloadIcn/>
                      Download
                    </DownloadBtn>
                  </CardBody>
                </ReportCard>
            </ReportRow>

            <ReportRow>
                <ReportCard>
                  <CardTitle>
                    <h5>
                      Gains Forms
                    </h5>
                  </CardTitle>
                  <CardBody>
                    <DateDropdown>
                      <select>
                        <option>Jan 2021 - Feb 2022</option>
                        <option>Jan 2019 - Feb 2020</option>
                        <option>Jan 2020 - Feb 2021</option>
                        <option>Jan 2018 - Feb 2019</option>
                        <option>Jan 2022 - Feb 2023</option>
                      </select>
                    </DateDropdown>
                    <DownloadBtn>
                      <DownloadIcn/>
                      Download
                    </DownloadBtn>
                  </CardBody>
                </ReportCard>

                <ReportCard>
                  <CardTitle>
                    <h5>
                      Finseed Forms
                    </h5>
                  </CardTitle>
                  <CardBody>
                    <DateDropdown>
                      <select>
                        <option>Jan 2021 - Feb 2022</option>
                        <option>Jan 2019 - Feb 2020</option>
                        <option>Jan 2020 - Feb 2021</option>
                        <option>Jan 2018 - Feb 2019</option>
                        <option>Jan 2022 - Feb 2023</option>
                      </select>
                    </DateDropdown>
                    <DownloadBtn>
                      <DownloadIcn/>
                      Download
                    </DownloadBtn>
                  </CardBody>
                </ReportCard>
            </ReportRow>
            
        </ReportSection>

        <ReportSection>
            <SectionHeader>
                <h4>Account Reports</h4>
            </SectionHeader>
            <ReportRow>
                <ReportCard>
                  <CardTitle>
                    <h5>
                      KYC Form
                    </h5>
                  </CardTitle>
                  <CardBody>
                    <DateDropdown>
                      <select>
                        <option>Jan 2021 - Feb 2022</option>
                        <option>Jan 2019 - Feb 2020</option>
                        <option>Jan 2020 - Feb 2021</option>
                        <option>Jan 2018 - Feb 2019</option>
                        <option>Jan 2022 - Feb 2023</option>
                      </select>
                    </DateDropdown>
                    <DownloadBtn>
                      <DownloadIcn/>
                      Download
                    </DownloadBtn>
                  </CardBody>
                </ReportCard>

                <ReportCard>
                  <CardTitle>
                    <h5>
                      Account Opening Form
                    </h5>
                  </CardTitle>
                  <CardBody>
                    <DateDropdown>
                      <select>
                        <option>Jan 2021 - Feb 2022</option>
                        <option>Jan 2019 - Feb 2020</option>
                        <option>Jan 2020 - Feb 2021</option>
                        <option>Jan 2018 - Feb 2019</option>
                        <option>Jan 2022 - Feb 2023</option>
                      </select>
                    </DateDropdown>
                    <DownloadBtn>
                      <DownloadIcn/>
                      Download
                    </DownloadBtn>
                  </CardBody>
                </ReportCard>
            </ReportRow>

            <ReportRow>
                <ReportCard>
                  <CardTitle>
                    <h5>
                      Balance Forms
                    </h5>
                  </CardTitle>
                  <CardBody>
                    <DateDropdown>
                      <select>
                        <option>Jan 2021 - Feb 2022</option>
                        <option>Jan 2019 - Feb 2020</option>
                        <option>Jan 2020 - Feb 2021</option>
                        <option>Jan 2018 - Feb 2019</option>
                        <option>Jan 2022 - Feb 2023</option>
                      </select>
                    </DateDropdown>
                    <DownloadBtn>
                      <DownloadIcn/>
                      Download
                    </DownloadBtn>
                  </CardBody>
                </ReportCard>

                <ReportCard>
                  <CardTitle>
                    <h5>
                      Sheet Forms
                    </h5>
                  </CardTitle>
                  <CardBody>
                    <DateDropdown>
                      <select>
                        <option>Jan 2021 - Feb 2022</option>
                        <option>Jan 2019 - Feb 2020</option>
                        <option>Jan 2020 - Feb 2021</option>
                        <option>Jan 2018 - Feb 2019</option>
                        <option>Jan 2022 - Feb 2023</option>
                      </select>
                    </DateDropdown>
                    <DownloadBtn>
                      <DownloadIcn/>
                      Download
                    </DownloadBtn>
                  </CardBody>
                </ReportCard>
            </ReportRow>
            
        </ReportSection>
      </Container>
      <Sidebar/>
  </Layout>
)

export const Head = () => <Seo title="Reports" />

export default Reports
