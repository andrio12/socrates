import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
    const router = useRouter();
    
    return (
        <div>
            Coffee store {router.query.id}
            <Link href="/">Back to home</Link>
        </div>
    );
};

export default CoffeeStore;