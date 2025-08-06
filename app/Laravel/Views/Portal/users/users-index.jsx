import Main from "../_layouts/main";

export default function UsersIndex({ data }) {
    const { page_title } = data;

    return(
        <Main> 
            <h1>{page_title}</h1>
        </Main>
    );
}