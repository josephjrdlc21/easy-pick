import Main from "@merchant/_layouts/main";
import Breadcrumb from "@merchant/_components/breadcrumb";

export default function Index() {
    return (
        <Main>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Breadcrumb.CurrentLink>Dashboard</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>
        </Main>
    );
}