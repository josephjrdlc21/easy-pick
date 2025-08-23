import Main from "@portal/_layouts/main";
import Breadcrumb from "@portal/_components/breadcrumb";
import Alert from "@portal/_components/alert";
import Accordion from "@portal/_components/accordion";

import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function Index({ data }) {
    const { page_title } = data;
    const { flash } = usePage().props;

    return(
        <Main>  
            <Head title={page_title} />

            <Breadcrumb>
                <Breadcrumb.Item>
                    <Breadcrumb.CurrentLink>Dashboard</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Accordion>
                <Accordion.Item defaultOpen={false}>
                {({ isOpen, setIsOpen }) => (
                    <>
                        <Accordion.Header isOpen={isOpen} setIsOpen={setIsOpen}>
                            What is Easy Pick?
                        </Accordion.Header>
                        <Accordion.Body isOpen={isOpen}>
                            Easy Pick is an open-source library of interactive components
                            built on top of Tailwind CSS including buttons, dropdowns,
                            modals, navbars, and more.
                        </Accordion.Body>
                    </>
                )}
                </Accordion.Item>
            </Accordion>

            {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}
        </Main>
    );
}