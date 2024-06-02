import PostList from "@/components/postList/PostList";
import styles from "./page.module.css";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <PostList />
        </div>
    );
};

export default HomePage;
