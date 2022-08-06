import {
  AboutArea,
  ActivitiesArea,
  Aside,
  Header,
  HighlightsArea,
  Layout,
  Main,
  ProfileArea,
  SuggestedPersonArea,
} from "components";
import type { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Layout>
        <Main>
          <ProfileArea />
          <HighlightsArea />
          <ActivitiesArea />
          <AboutArea />
        </Main>
        {/* <Aside>
          <SuggestedPersonArea />
        </Aside> */}
      </Layout>
    </>
  );
};

export default Home;
