import Link from 'next/link'

const Features = () => {
        return (
          <div className="features-area pt-100 pb-70">
            <h1 style={{textAlign: 'center', paddingBottom: '1rem'}}>How it works</h1>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-6 p-0">
                  <div className="single-features">
                    <i className="flaticon-cloud-computing-1"></i>
                    <h3>1. Sign up</h3>
                    <p>
                      All you have to do is subscribe and then verify your email address so we know it's
                      you.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 p-0">
                  <div className="single-features">
                    <i className="flaticon-engineer"></i>
                    <h3>2. Receive fake emails</h3>
                    <p>The 'hottest' phishing emails sent straight to your inbox. You can read but do NOT click the link.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                  <div className="single-features">
                    <i className="flaticon-success"></i>
                    <h3>3. Get your monthly score</h3>
                    <p>Did we manage to phish you or not? Over time you will become more and more savvy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
}

export default Features;