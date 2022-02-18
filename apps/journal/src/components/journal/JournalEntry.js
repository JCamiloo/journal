export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2R05MFgxxUFBxU1tu82poXTIpVb_XEgFwg&usqp=CAU)'
        }}
      >
      </div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un nuevo dia
        </p>

        <p className="journal__entry-content">
          asdad asd a da dasd as dasd asda sdasd asdas d
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
