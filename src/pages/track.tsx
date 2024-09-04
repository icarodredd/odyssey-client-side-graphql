import { Layout, QueryResult } from "../components";
import { graphql as gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

export const GET_TRACK = gql(`
query GetTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
    description
    numberOfViews
    modules {
      id
      title
      length
      content
      videoUrl
    }
  }
}
`);

const Track = () => {
  const { trackId } = useParams();

  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId: trackId || "" },
  });

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        {/* this is where our component displaying the data will go */}
      </QueryResult>
    </Layout>
  );
};

export default Track;
