"use client";

import { useTranslationContext } from "@/contexts/TranslationContext";

// Variables
import { AUTHOR_GITHUB } from "@/lib/variables";

const BaseFooter = () => {
    const { _t } = useTranslationContext();

    return (
        <footer className="container py-10">
            <p>
                {_t("footer.developedBy")}{" "}
                <a
                    href={AUTHOR_GITHUB}
                    target="_blank"
                    style={{ textDecoration: "underline" }}
                >
                    Codicis
                </a>
            </p>
        </footer>
    );
};

export default BaseFooter;
