import { EditLink } from "../components/EditLink";

export default function Login(props) {
  return <>
    <EditLink />
    {props.preview && <p>You are logged in to Tina.io. Return to <a href="/">homepage</a></p> }
  </>


}

export const getStaticProps = async (props: {preview: boolean, previewData: { tinaio_token: string}}) => {
  return {
    props: {
    preview: !!props.preview
  }}
};
