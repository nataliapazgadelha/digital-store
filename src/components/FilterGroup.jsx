import './FilterGroup.css'

// title | inputType: 'checkbox' | 'radio' | options: [{ text, value? }]
// selected (array) e onChange(array) deixam o grupo controlado pela página
export default function FilterGroup({ title, inputType = 'checkbox', options = [], selected = [], onChange }) {
  const name = `filter-${title}`

  function handleChange(value, checked) {
    if (!onChange) return
    if (inputType === 'radio') onChange([value])
    else onChange(checked ? [...selected, value] : selected.filter((v) => v !== value))
  }

  return (
    <fieldset className="filter-group">
      <legend className="filter-group__title">{title}</legend>
      {options.map((option) => {
        const value = option.value ?? option.text
        return (
          <label key={value} className="filter-group__option">
            <input
              type={inputType}
              name={name}
              value={value}
              checked={selected.includes(value)}
              onChange={(e) => handleChange(value, e.target.checked)}
            />
            <span>{option.text}</span>
          </label>
        )
      })}
    </fieldset>
  )
}
