import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar/>

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        >
        </textarea>

        <div className="notes__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2R05MFgxxUFBxU1tu82poXTIpVb_XEgFwg&usqp=CAU"
            alt="sea"
          />
        </div>
      </div>
    </div>
  )
}
