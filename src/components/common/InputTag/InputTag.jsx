import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTag = ({
  placeholder, required, defaultTags, selectedTags,
}) => {
  const [tags, setTags] = useState(defaultTags);
  const [input, setInput] = useState('');
  const removeTags = (event, indexToRemove) => {
    event.preventDefault();
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
    selectedTags(newTags);
  };
  const onChangeGenres = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const addTags = (event) => {
    event.preventDefault();
    const cleanedInput = input.trim().toLowerCase();
    if (cleanedInput.length && !tags.includes(cleanedInput.toLowerCase())) {
      setInput(cleanedInput);
      setTags([...tags, cleanedInput]);
      selectedTags([...tags, cleanedInput]);
      setInput('');
    }
  };

  return (
    <div className="tags-input">
      <ul id="tags">
        {tags.map((tag, index) => (
          <li key={tag} className="tag">
            <span className="tag-title">{tag}</span>
            <button
              className="tag-close-icon"
              id={index}
              onClick={(e) => removeTags(e, index)}
              type="button"
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyDown={(event) => (event.key === 'Enter' ? addTags(event) : null)}
        onChange={onChangeGenres}
        value={input}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

InputTag.propTypes = {
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  defaultTags: PropTypes.arrayOf(PropTypes.string),
  selectedTags: PropTypes.func,
};

InputTag.defaultProps = {
  required: false,
  placeholder: null,
  defaultTags: [],
  selectedTags: null,
};

export default InputTag;
