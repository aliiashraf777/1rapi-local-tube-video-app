import { Stack } from "@mui/material"
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {

    // const selectedCategory = 'New';

    return (
        <Stack
            direction='row'
            sx={{
                overflow: 'auto',
                height: { sx: 'auto', md: '100%' },
                flexDirection: { md: 'column' },
                marginTop: '15px',
            }}
        >
            {categories.map((category, idx) => {
                const Icon = category.icon;

                return (
                    <button
                        key={idx}
                        className='category-btn'
                        style={{
                            background: category.name === selectedCategory && '#121212',
                            color: '#fff',
                            // border: category.name === selectedCategory && '1px solid #5c5c5c',
                        }}
                        onClick={() => setSelectedCategory(category.name)}
                    >
                        <span style={{
                            color: category.name === selectedCategory ? 'white' : 'red',
                            marginRight: '15px'
                        }}>
                            <Icon />
                        </span>
                        <span style={{
                            opacity: category.name === selectedCategory ? '1' : '0.7'
                        }}>
                            {category.name}
                        </span>
                    </button>
                )
            })}
        </Stack >
    )
}

export default Sidebar
