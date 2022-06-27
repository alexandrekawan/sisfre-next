import Layout from "../../components/layout"

export default function Professor() {
    return (<></>);
}

Professor.getLayout = function getLayout(page) {
    return (
        <Layout title='Meus '>
            {page}
        </Layout>
    );
}