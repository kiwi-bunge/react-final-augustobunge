

export default function SizeOptions({options, onSelect, defaultOption=1}) {


    return options.map((sizes) => (

        <>
            <input
                onChange= {(event) => {
                    onselect(sizes.value)
                }}

                type="radio"
                name="Size"
                checked={defaultOption===sizes.value}
                id={sizes.vlaue}
            />

            <label for={sizes.value}>{sizes.text}</label>

        </>
    ))
}