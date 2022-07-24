import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class FaqContent extends Component {
    render() {
        return (
          <section className="faq-area ptb-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="faq-accordion">
                    <Accordion allowZeroExpanded preExpanded={["a"]}>
                      <AccordionItem uuid="a">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            What is Phish Me If You Can?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            It is a simple game that consists of a simulated
                            email inbox. The goal is to find all of the scam
                            emails and add them to your scambox. By playing the
                            game periodically a person will become more aware of
                            what to look for in the latest email phishing scams
                            that go around.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="e">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            What is Phishing?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Phishing is a type of social engineering where a
                            criminal sends a fraudulent message designed to
                            trick a person into revealing sensitive information
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="b">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            What happens with my results?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Nothing! No results or personal information is
                            returned to our servers. Your own results are stored
                            in your browser so that when you return you'll be
                            able to see how you previously performed.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="c">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Where did the phishing emails come from?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            These phishing emails are a combination of ones that
                            I have found in my own email inbox over the years
                            and common emails that others have posted online.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="d">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Does everyone playing the game receive the same
                            emails?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Yes. On the first of each month the set of emails
                            will rotate but everyone playing the game that month
                            will receive the same emails as everyone else.{" "}
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>
                      {/* <AccordionItem uuid="d">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            What happens if I get 'phished'
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            This is not meant to be an intimidating service,
                            think of it more as a game. If you do end up
                            clicking a link then you will arrive at a page on
                            this website with some tips and tricks on how to
                            avoid falling for it again!
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>
                      {/* <AccordionItem uuid="d">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            What happens if I get 'phished'
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            This is not meant to be an intimidating service,
                            think of it more as a game. If you do end up
                            clicking a link then you will arrive at a page on
                            this website with some tips and tricks on how to
                            avoid falling for it again!
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="a">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            How often do we send emails?
                          </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                          <p>
                            We will attempt to send at least one fake phishing
                            email a week. Then monthly you will receive a
                            report. This will continue until you unsubscribe.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="b">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            How do I unsubscribe
                          </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                          <p>
                            If you're finding it too easy (or annoying) then
                            every phishing email will have an unsubscribe
                            button.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="c">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            How do I delete my account?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Email phishme.contact@gmail.com from your email
                            address and we will remove your account and all
                            associated data.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="e">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            What information do we track?
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            All we track is whether an email has been opened and
                            a link has been clicked.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="e">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            I'm not receiving any emails
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            First check your spam folder, in order to ensure
                            that the emails are delivered go to your email
                            provider (Gmail or Outlook) and whitelist these
                            emails:
                          </p>

                          <p>oliver.m.taylor1@gmail.com</p>
                          <p>contact@phishmeifyoucan.com</p>
                        </AccordionItemPanel>
                      </AccordionItem> */}
                    </Accordion>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="faq-img">
                    <img src="/images/faq-img.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default FaqContent;