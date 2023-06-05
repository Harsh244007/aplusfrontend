import { Box, Button } from "@chakra-ui/react";
import React from "react";

import "./common.css";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    return (
        <Box className='pagination'>
            {pages.map((page, index) => {
                return (
                    <Button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </Button>
                );
            })}
        </Box>
    );
};

export default React.memo(Pagination);