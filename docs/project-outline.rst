Project overview and guidelines
=======================

Overview
--------

Code4SA is an awesome South African non-profit organisation that is active in
the open data, transparency and journalism space. During 2014 winter internship
Merada Richter created a USSD application that allows people to query Code4SA’s
medicine price registry to allow people make better informed decisions around
which brand medicine to buy and at what price. It is available on all South
African mobile networks by dialling *120*8864*1399#. The code that powers is
this a Vumi Javascript sandbox application, the code is available here.

We’d like to do the same for Code4SA’s Wazimap. Wazimap is an awesome Django
based web application that gives insight into the 2011 census data on a
provincial, municipal, and ward level.

* We would like to explore what information is available via Wazimap’s APIs,
  e.g.

  * http://wazimap.co.za/place-search/json/?q=melkbosstrand
  * http://wazimap.co.za/profiles/ward-19100023.json

* We would like to access this data from the Vumi’s Javascript sandbox.

* We would like to design an application that allows people to query census data
  via USSD and receive the results via SMS.

Things one would learn:

* Developing a USSD & SMS application using Vumi’s Javascript sandbox
* UX design within the constraints of a USSD application
* Writing tests

People to poke: Simon Cross (hodgestar), Justin van der Merwe (justinvdm), Rudi
Giesler (rudigiesler)


Useful links
------------

* `Jsbox Toolkit documentation <http://vumi-jssandbox-toolkit.readthedocs.org/>`_
* `Jsbox Toolkit source <https://github.com/praekelt/vumi-jssandbox-toolkit/>`_
* `Jsbox application skeleton <https://github.com/praekelt/go-jsbox-skeleton>`_
* `Q promises <https://github.com/kriskowal/q>`_
* `Javascript <https://developer.mozilla.org/en-US/docs/Web/JavaScript>`_
* `Lodash <https://lodash.com/docs>`_
* `Mocha test framework <http://mochajs.org/>`_
