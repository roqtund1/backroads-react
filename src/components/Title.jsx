export default function Title({txt1, txt2}) {
  return (
    <div className="section-title">
        <h2>
          {txt1} <span>{txt2}</span>
        </h2>
      </div>
  )
}