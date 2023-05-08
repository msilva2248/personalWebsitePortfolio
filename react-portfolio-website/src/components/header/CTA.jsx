import React from 'react' 
import Resume from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        {/* Create our buttons, href will contain the URL the link goes to, 
        and the a tag defines a hyperlink to link from one page to another */
        /* We'll also add the button classes created earlier */}
        
        <a href={Resume} download className='btn'>Download Resume</a>

        {/* Gives an id of contact so the button can take us to the contact section */}
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA