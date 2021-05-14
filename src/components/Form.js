import { memo } from 'react';

const Form = memo(({ handleSubmit, inputRef }) => (
    <form onSubmit={handleSubmit}>
        <input ref={inputRef} name="search" autoComplete="off" />
        <button type="submit">Search</button>
    </form>
));

Form.displayName = 'MemoForm';

export default Form;
