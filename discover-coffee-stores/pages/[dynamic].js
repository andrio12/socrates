import { useRouter } from "next/router";
import Head from "next/head";

const DynamicRoute = () => {
    const router = useRouter();
    const query = router.query.dynamic;

    return (
        <div>
            <Head>
                <title>{query}</title>
            </Head>
            Hallo on the route {query}
        </div>
    );
};

export default DynamicRoute;