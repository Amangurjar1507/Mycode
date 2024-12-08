import {PropertySummary} from './interface';

export const handleHtmlCode = (userData: PropertySummary) => {
  console.log('multiplyImage', userData);
  const {
    BUA = 110,
    accordingDealer = 'Nome',
    addressOfPropertyAsPerActual = 'Address',
    addressOfPropertyAsPerDocument = 'As add',
    ageProperty = 20,
    allocatedBy = 'BOr',
    applicationNo = 'App No 22',
    asperActualBack = '',
    asperActualFront = '',
    asperActualSide = '',
    asperActualSideOne = '',
    aubaseBranch = '',
    basementArea = 10,
    basementRate = 10,
    boundariesAsperActualEast = 3,
    boundariesAsperActualNorth = 5,
    boundariesAsperActualSouth = 10,
    boundariesAsperActualWest = 22,
    boundariesDOCEast = 28,
    boundariesDOCNorth = 12,
    boundariesDOCSouth = 49,
    boundariesDOCWest = 22,
    builtUp = 34,
    busStation = 45,
    conditionApproach = 33,
    conservativeValue = 30,
    considerBuiltUp = 33,
    contactNoOfCustomer = 'Ram ji',
    cycloneZone = 'qw',
    dlcArea = 10,
    dlcRate = 20,
    documentsProvidedForValuation = 'type Hello',
    shopName = 'ssm',
    eID = 'e',
    eastDocument = 'e',
    ff = 'e',
    ffArea = 10,
    ffRate = 10,
    floodZone = 'floodZone',
    flooring = '',
    foundation = 'floodZone',
    geographicalLimit = 'geographicalLimit',
    gfArea = 0,
    gfRate = 20,
    govBack = '',
    govFront = '',
    govSide = '',
    govSideOne = '',
    hospital = 'D.H. M',
    insurableRate = 20,
    landslideZone = '12',
    leaseHoldTypeLower = 'leaseHoldTypeLower',
    localityType = 'localityType',
    localityTypeLower = 'localityTypeLower',
    locationName = 'Ram',
    marketBasementArea = 10,
    marketBasementRate = 10,
    marketDLCArea = 20,
    marketDLCRate = 20,
    marketFFArea = 40,
    marketFFRate = 40,
    marketGfArea = 20,
    marketGfRate = 10,
    marketSFArea = 10,
    marketSfRate = 10,
    mobNo = '94376632',
    name = 'rAM',
    nameOfCustomer = 'Ram',
    natureConstruction = 'natite',
    nearbyLandmark = 'Mark',
    nearestBranch = 'nearestBranch',
    negativeLocality = 'type',
    noOfHouses = 30,
    northDocument = '3',
    occupantName = '2',
    occupationStatus = '1',
    ownershipAsPerDocuments = '8',
    perActualEast = '30',
    perActualNorth = '22',
    perActualSouth = '12',
    perActualWest = 'West',
    personName = 'Ram',
    pincode = '12346',
    plinthsqm = 20,
    plotDemarcted = 'plotDemarcted',
    product = 'product',
    propertyIdentified = 'propertyShown',
    propertyShown = '',
    propertyTitleDocument = 'ss',
    propertyTypeLower = 'Lower',
    purposeOfValuation = '',
    qSVDistress = '11',
    railwayStation = '12',
    registrarOffices = '18',
    rentedOccupants = '14',
    residualAges = 10,
    seismicZone = '2',
    selectedDate = '33',
    sf = '',
    sfArea = 10,
    sfRate = 10,
    southDocument = 'southDocument',
    sqft = 10,
    sqm = 40,
    sqyd = 20,
    totalDeveloperArea = 20,
    westDocument = '22',
    wetherBasic = '11',
    zoneNumber = 20,
    remark: remark,
  } = userData;

  const totalValueGov =
    Number(dlcRate) * Number(dlcArea) +
    Number(basementRate) * Number(basementArea) +
    Number(gfRate) * Number(gfArea) +
    Number(ffRate) * Number(ffArea) +
    Number(sfRate) * Number(sfArea);

  const totalCostProperty =
    Number(marketDLCArea) * Number(marketDLCRate) +
    Number(marketBasementArea) * Number(marketBasementRate) +
    Number(marketGfArea) * Number(marketGfRate) +
    Number(marketFFArea) * Number(marketFFRate) +
    Number(marketSfRate) * Number(marketSFArea);

  console.log('suydghsc', totalCostProperty);
  console.log('userData.images', userData.images);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Table Example</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <!-- Custom styles -->
   <!-- Custom styles -->
<style>
  /* Set body and html to height 100% to ensure the table can expand fully */
  html,
  body {
    height: 8%;
    margin: 12; /* Remove default margin */
    padding: 10px; /* Add padding */
    width: 100%; /* Full width */
    margin-top: 3px;
  }

  .text_center {
    text-align: center;
  }

  .image-table {
    width: 100%;
  }

  .image-table td {
    padding: 1px;
    text-align: center;
  }

  .box-style {
    padding: 1px;
    text-align: center;
   }
   .top-spacing {
    padding-top: 120px; /* Adds space above the table */
  }


  .centered {
    text-align: center;
  }

  table {
    width: 100%;
  }

  th,
  td {
    border: 1px solid black;
  }

  /* Apply styles to the table */
  .custom-table {
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: transparent; /* Transparent background */
    border-collapse: collapse; /* Ensures borders between cells are merged */
  }

  .custom-table > td {
    border: none !important;
  }

  .border-none {
    border: none;
  }

  .border-top-only {
    border-top: 1px solid black;
  }

  .border-bottom-only {
    border-bottom: 1px solid black;
  }

  .border-left-only {
    border-left: 1px solid black;
  }

  .border-right-only {
    border-right: 1px solid black;
  }

  .inner-table {
    width: 100%;
    border-collapse: collapse;
  }

  /* Media Queries */

  /* For screens with a maximum width of 768px (tablets and smaller) */
  @media only screen and (max-width: 768px) {
    .image-table {
      width: 90%;
    }
    .custom-table {
      font-size: 0.8em;
    }
    .inner-table {
      height: 150%;
    }
  }

  /* For screens with a maximum width of 480px (mobile devices) */
  @media only screen and (max-width: 480px) {
    .image-table {
      width: 80%;
    }
    .custom-table {
      font-size: 0.6em;
    }
    .inner-table {
      height: 100%;
    }
  }
</style>
 
  </head>
  <body>
    <table >
      <tbody>
        <tr class="p-0" >
          <td style="height: 50%; padding-left: 1%;"  >Name</td>
          <td style="height: 50%;  "  class="text_center">${name}</td>
          <td style="height: 50%; padding-left: 1%"  class="text_center">E.ID.</td>
          <td style="height: 50%;" rowspan="2" class="text-center center">Image</td>
        </tr>
        
      
        <tr>
          <td style="height: 50%; padding-left: 1%" >Mob No</td>
          <td style="height: 50px;" class="text_center">${mobNo}</td>
          <td  style="height: 50px;" class="text_center">${eID}</td>
        </tr>
        <tr>
          <td colspan="4"  style="height: 60px;" class="text-center">Valuation Report</td>
        </tr>
        <tr>
          <td colspan="2"></td>
          <td style="height: 50px;" style="height: 50px;" class="text_center">Property</td>
          <td style="height: 50px;" class="text_center">${propertyTypeLower}</td>
        </tr>
        <tr>
          <td style="padding-left: 1%">Section 1</td>
          <td colspan="3" class="text_center" style="height: 50px;">
            INFORMATION DURING ASSIGNMENT OF VALUATION
          </td>
        </tr>
        <tr>
          <td style="height: 50px; padding-left: 1%">Date of Technical Visit</td>
          <td  style="height: 50px;"class="text_center">${selectedDate}</td>
          <td style="height: 50px;" class="text_center">Property Title Document</td>
          <td style="height: 50px;" class="text_center">${propertyTitleDocument}</td>
        </tr>
        <tr>
          <td style="height: 50px; padding-left: 1%">Application No.</td>
          <td class="text_center" style="height: 50px;">${applicationNo}</td>
          <td class="text_center" style="height: 50px;">Geograpl Ical Llmlt          </td>
          <td class="text_center" style="height: 50px;">${geographicalLimit}</td>
        </tr>
        <tr>
          <td style="padding-left: 1%">Customer/Co-Applicant

          </td>
          <td colspan="3" class="text_center" style="height: 50px;">${nameOfCustomer}t</td>
        </tr>
        <tr>
          <td style="padding-left: 1%">Ownership as per Documents

          </td>
          <td colspan="3" class="text_center" style="height: 50px;">${ownershipAsPerDocuments}

          </td>
        </tr>
        <tr>
          <td style="padding-left: 1%">Contact no. of Customer

          </td>
          <td class="text_center">${contactNoOfCustomer}</td>
          <td class="text_center" style="height: 50px;">Purpose of valuation

          </td>
          <td class="text_center" style="height: 50px;">${purposeOfValuation}</td>
        </tr>
        <tr>
          <td style="height: 50px; padding-left: 1%">Lease hold/ Free hold

          </td>
          <td class="text_center" style="height: 50px;">${leaseHoldTypeLower}</td>
          <td class="text_center" style="height: 50px;">Occupation Status

          </td>
          <td class="text_center" style="height: 50px;">${occupationStatus}

          </td>
        </tr>
        <tr>
          <td style="height: 50px; padding-left: 1%">Documents provided for valuation

          </td>
          <td class="text_center" style="height: 50px;">${documentsProvidedForValuation}
          </td>
          <td class="text_center" style="height: 50px;">Allocated by (RO/BM):-

          </td>
          <td class="text_center" style="height: 50px;">${allocatedBy}

          </td>
        </tr>
        <tr>
          <td rowspan="3" style="height: 50px; padding-left: 1%">Address of Property

 
          </td>
          <td class="text_center" style="height: 50px; ">As per document

          </td>
          <td class="text_center" style="height: 50px;" colspan="2">${addressOfPropertyAsPerDocument}

          </td>
        </tr>
        <tr>
          <td class="text_center border-top none" style="height: 50px; border-top:none;">As per Actual

          </td>
          <td class="text_center" style="height: 50px;" colspan="2">${addressOfPropertyAsPerActual}</td>
        </tr>
        <tr>
          <td class="text_center">Pin code

          </td>
          <td colspan="3">
            <table
              class="inner-table border-none"
              style="border-collapse: separate"
            >
              <tr style="border: none;">
                <td
                style="border: none; border-right: 1px solid #000; padding: 8px; height: 50px; text-align: center;"
            >
                ${pincode}
            </td>
            
                <td
                   style="border: none; border-right: 1px solid #000 ; height: 50px; text-align: center;"
                >
                Product
                </td>
                <td  style="border: none ;height: 50px; text-align: center;">${product}</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td  style="height: 50px;padding-left: 1%">Section 2</td>
          <td   style="height: 50px;" colspan="3" class="text_center">Locality Details</td>
        </tr>
        <tr>
          <td  style="height: 50px; padding-left: 1%">T${localityType}

          </td>
          <td   style="height: 50px;" class="text_center">${localityType}

          </td>
          <td  style="height: 50px;" class="text_center">Nearest Railway Station
          </td>
          <td   style="height: 50px;" class="text_center">${railwayStation}

          </td>
        </tr>
        <tr>
          <td  style="height: 50px;padding-left: 1%">Distance from Au Base Branch

          </td>
          <td  style="height: 50px; padding-left: 1%" class="text_center">${aubaseBranch}

          </td>
          <td   style="height: 50px;" class="text_center">Nearest Hospital

          </td>
          <td  style="height: 50px;" class="text_center">${hospital}

          </td>
        </tr>
        <tr>
          <td  style="height: 50px; padding-left: 1%">Distance from nearest AU Branch

          </td>
          <td  style="height: 50px;" class="text_center">${nearestBranch}

          </td>
          <td  style="height: 50px;" class="text_center">Nearest Bus Stand

          </td>
          <td  style="height: 50px;"  class="text_center">${busStation}</td>
        </tr>
        <tr>
          <td   style="height: 50px;padding-left: 1%" colspan="3">No. of houses in village (Rural cases)

          </td>
          <td  style="height: 50px;" class="text_center">${noOfHouses}

          </td>
        </tr>
        <tr>
          <td   style="height: 50px;padding-left: 1%;" colspan="3">Total development in Area/Locality (°A)

          </td>
          <td  style="height: 50px;" class="text_center">${totalDeveloperArea}</td>
        </tr>
        <tr>
          <td  style="height:50px;padding-left: 1%;" colspan="3">Type of locality (Lower Class/ Middle / Upper Middle)

          </td>
          <td  style="height: 50px;" class="text_center">${localityTypeLower}

          </td>
        </tr>
        <tr>
          <td  style="height: 50px; padding-left: 1%" colspan="3">Any Negative to the Locality(Crematoriums,Slums ,riot prone, gases, chemical

          </td>
          <td  style="height: 50px;" class="text_center">${negativeLocality}

          </td>
        </tr>
        <tr>
          <td  style="height: 50px; padding-left: 1%">Zone No.

          </td>
          <td style="height: 50px;" class="text_center">Sub Registrar Office

          </td>
          <td style="height: 50px;" class="text_center">DLC Rate

          </td>
          <td style="height: 50px;" class="text_center">Location Name

          </td>
        </tr>
        <tr>
          <td  style="height: 50px; padding-left: 1%">${zoneNumber}</td>
          <td  style="height: 50px;" class="text_center">${registrarOffices}</td>
          <td  style="height: 50px;"class="custom-table2 td">
            <table style="border-collapse: collapse;height: 50px; width: 100%; border: none">
              <tbody>
                <tr>
                  <td
                    style="
                      padding: 1rem;
                      border: none;
                      text-align: center;
                      height: 42px
                      "
                  >
                 ${dlcRate}/ SqMt
                  </td>
                  </tr>
              </tbody>
            </table>
          </td>

          <td   style="height: 50px;" class="text_center">${locationName}</td>
        </tr>
        <tr>
          <td  style="height: 50px;" colspan="4" class="text-center">Hazard Zone</td>
        </tr>
        <tr>
          <td   style="height: 50px; padding-left: 1%">Seismic Zone</td>
          <td  style="height: 50px;" class="text_center">${seismicZone}</td>
          <td  style="height: 50px;" class="text_center">Cycione Zone</td>
          <td   style="height: 50px;"class="text_center">${cycloneZone} </td>
        </tr>
        <tr>
          <td  style="height: 50px;padding-left: 1%;" >Flood Zone</td>
          <td   style="height: 50px;"class="text_center">${floodZone} </td>
          <td   style="height: 50px;" class="text_center">Landslide Zone</td>
          <td   style="height: 50px;" class="text_center">${landslideZone}</td>
        </tr>
        <tr>
          <td   style="height: 50px; padding-left: 1%"colspan="2">Condition of Approach Rood</td>
          <td   style="height: 50px;"colspan="2" class="text_center">${conditionApproach}</td>
        </tr>
        <tr>
          <td   style="height: 50px; padding-left: 1%"colspan="2">Nearby LardMark</td>
          <td   style="height: 50px;" colspan="2" class="text_center">${nearbyLandmark}</td>
        </tr>
        <tr>
          <td  style="height: 50px; padding-left: 1%" colspan="2">Wether basic amenities like water,electricity</td>
          <td  style="height: 50px;" colspan="2" class="text_center">${wetherBasic}</td>
        </tr>
       





<table style="border: none; border-collapse: collapse; margin-top: 20px;">
  <tr>
    <td style="border-bottom: none;"></td>
    <td style="border-bottom: none;"></td>
  </tr>
</table>


            
  <table style="width: 100%; margin-top: 20px; border-collapse: collapse">
          <tr style="top:100px">
            <td style="height: 60px; padding-left: 1%">Section 3</td>
            <td style="height: 60px;" colspan="3" class="centered">Property Details</td>
          </tr>
          
          <tbody class="border none">
            <tr>
              <td style="height: 80px; padding-left: 1%">Area of Land (SQM)</td>
              <td style="height: 80px; border: none;" colspan="3" class="p-0">
                <table class="inner-table " style="border-collapse: separate; width: 100%;">
                  <tbody> 
                    <tr class="border none">
                      <td class="text-center center" style="border-top: none; border-bottom: none; border-right: none;border-left: none;  height: 70px;">Area of Land (SQM)</td>
                      <td class="box-style border-right-only" style="border-top: none; border-bottom: none;border-right: none; height: 70px;">Area of Land (SQFT)</td>
                      <td class="box-style border-right-only" style="border-bottom: none;border-top: none; height: 70px;">Area of Land (SQyd)</td>
                      <td class="box-style border-none" style="border-right: 1px solid black;  border-bottom: 1px solid black; height: 70px;">
                        Plinth area (SQM)
                      </td>
                                       
                    <tr>
                      <td class="text-center center" style=" border-bottom: none; border-right: none;border-left: none;  height: 70px;">${sqm}</td>
                      <td class="box-style border-right-only" style="border-bottom: none; border-right: none; height: 70px;">${sqft}</td>
                      <td class="box-style border-right-only" style="border-bottom: none; height: 70px;">${sqyd}</td>
                       <td class="box-style border-none" style="border-right: 1px solid black;   height: 70px;">
                       ${plinthsqm}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
           




        <tr>
          <td style="height: 70px ;padding-left: 1%">Total Builtup area (Sqft)</td>
          <td style="height: 70px" class="text_center">${builtUp}</td>
          <td  style="height: 70px"class="text_center">Age of Properties</td>
          <td style="height: 70px" class="text_center">${ageProperty} </td>
        </tr>
        <tr>
          <td style="height: 70px;padding-left: 1%;">Total Consider Bulid area (Sqft)</td>
          <td  style="height: 70px"class="text_center">${considerBuiltUp}</td>
          <td  style="height: 70px"class="text_center">Residual ages of Properties</td>
          <td  style="height: 70px"class="text_center">${residualAges}</td>
        </tr>
        <tr>
          <td  style="height:70px;padding-left:1%"colspan="2">Usage (Residential /Mixes Commercial /Commercial/Vacant)</td>
          <td  style="height: 70px"colspan="2" class="text_center">Ans</td>
        </tr>
        <tr>
          <td  style="height: 70px;padding-left: 1%"colspan="2">Nature of Construction</td>
          <td colspan="2" class="text_center">${natureConstruction}</td>
        </tr>
        <tr>
          <td style="height: 70px;padding-left: 1%" colspan="2">Occupant (if occupied),Name of Occupant</td>
          <td  style="height: 70px"colspan="2" class="text_center">${occupantName}</td>
        </tr>
        <tr>
          <td  style="height: 70px;padding-left: 1%" colspan="2">if Rented ,List of Occupants</td>
          <td style="height: 70px" colspan="2" class="text_center">${rentedOccupants}</td>
        </tr>
        <tr>
          <td  style="height: 70px;padding-left: 1%" colspan="2">Plot Demarcted at site</td>
          <td  style="height: 70px" colspan="2" class="text_center">${plotDemarcted}</td>
        </tr>
        <tr>
          <td  style="height:70px;padding-left: 1%" colspan="2"  >Property identfied through</td>
          <td  style="height: 70px"colspan="2" class="text_center">${propertyIdentified}</td>
        </tr>
        <tr>
          <td style="height: 70px;padding-left: 1%" colspan="2" >Property Shown by </td>
          <td style="height: 70px" colspan="2" class="text_center">${propertyShown}</td>
        </tr>
      </tbody>
    </table>
  <table style="width: 100%; margin-top: 20px; border-collapse: collapse">
      <tr>
        <td  style="height: 50px;" colspan="5" class="centered">Dimension Details</td>
      </tr>
      <tr>
        <td style="height: 50px;padding-left: 1%">Description</td>
        <td  style="height: 50px;" class="box-style">North</td>
        <td  style="height: 50px;"class="box-style">East</td>
        <td  style="height: 50px;"class="box-style">West</td>
        <td  style="height: 50px;" class="box-style">South</td>
      </tr>
      <tr>
        <td style="height: 50px;padding-left: 1%" >As per Document</td>
        <td style="height: 50px;" class="text_center">${northDocument}</td>
        <td style="height: 50px;" class="text_center">${eastDocument}</td>
        <td  style="height: 50px;" class="text_center">${westDocument}</td>
        <td  style="height: 50px;"  class="text_center">${southDocument}</td>
      </tr>
      <tr>
        <td  style="height: 50px;padding-left: 1% " >As per Actual</td>
        <td  style="height: 50px;" class="text_center">${perActualNorth}</td>
        <td  style="height: 50px"class="text_center">${perActualEast}</td>
        <td   style="height: 50px;"class="text_center ">${perActualWest}</td>
        <td style="height: 50px;"   class="text_center ">${perActualSouth}</td>
      </tr>
    </table>



    <table style="width: 100%; margin-top: 20px; border-collapse: collapse">
      <tr>
        <td  style="height: 48px;" colspan="5" class="centered">Boundaries Details</td>
      </tr> 
      <tr>
        <td style="height: 48px;padding-left: 1%">Description</td>
        <td  style="height: 48px;" class="box-style">North</td>
        <td  style="height: 48px;"class="box-style">East</td>
        <td  style="height: 48px;"class="box-style">West</td>
        <td  style="height: 48px;" class="box-style">South</td>
      </tr>
      <tr>
        <td style="height: 48px;padding-left: 1%" >As per Document</td>
        <td style="height: 48px;" class="text_center">${boundariesDOCNorth}</td>
        <td style="height: 48px;" class="text_center">${boundariesDOCEast}</td>
        <td  style="height: 48px;" class="text_center">${boundariesDOCWest}</td>
        <td  style="height: 48px;"  class="text_center">${boundariesDOCSouth}</td>
      </tr>
      <tr>
        <td  style="height: 48px;padding-left: 1% ;border-bottom: none;" >As per Actual</td>
        <td  style="height:48px;border-bottom: none;" class="text_center ">${boundariesAsperActualNorth}</td>
        <td  style="height: 48px;border-bottom: none;"class="text_center">${boundariesAsperActualEast}</td>
        <td   style="height: 48px;border-bottom: none;"class="text_center ">${boundariesAsperActualWest}</td>
        <td style="height: 48px;border-bottom: none;"   class="text_center">${boundariesAsperActualSouth}</td>
      </tr>
    </table>


 
 

    <table>

      <tr  >
            <td style="height: 48px;padding-left: 1%">Section 4</td>
            <td style="height: 48px;" colspan="3" class="centered">Specification & Maintenance</td>
            </tr>
      
      <tr>
        <td  style="height: 40px;padding-left: 1%" class="border-bottom none">Foundation/Roof/Flooring</td>
        <td style="height: 40px;" colspan="3" class="centered border-bottom none">${foundation}</td>
      </tr>
      <tr>
        <td colspan="3" class="p-0 border-bottom none">
          <table class="inner-table border-collapse: collapse">
            <tbody>
              <tr>
                <td style="height: 40px;">Quality of Land</td>
                <td style="height: 40px;" class="box-style border-right-only">Average</td>
                <td  style="height: 40px;" class="box-style border-right-only border-bottom none">
                  Maintenance like
                </td>
                <td style="height: 40px;" class="box-style border-none">Average</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </table>

    <table>
      <tbody>

      
             <td style="height: 40px;padding-left: 1%" >Section 5</td>
            <td style="height: 40px;" colspan="3" class="centered">Local Authority & Complainces $ Safety Aspects</td>
          </tr>
        
        <tr>
          <td rowspan="2" style=" border-right: none">
            
          </td>
          <td style="border-bottom: none; height: 42px" class="box-style border-bottom none">
            As per Government
          </td>
          <td style="border-bottom: none; height: 40px;" class="box-style border-bottom none">
            As per Actual

          </td>
        </tr>
        <tr>
          <td class="p-0 ">
            <table class="inner-table">
              <tbody>
                <tr>
                  <td
                    rowspan="2"
                    style="height: 40px; border-bottom: none; border-left: none;"
                    class="box-style"
                  >
                  Setbacks
                  </td>
                  <td style="height: 40px;" class="box-style">Font</td>
                  <td  style="height: 40px;" class="box-style">Back</td>
                  <td  style="height: 40px;" class="box-style">Side</td>
                  <td  style="height: 40px;border-right: none;" class="box-style ">Side</td>
                </tr>
                <tr>
                  <td
                    style="border-top: none ;height: 40px; border-bottom: none;"
                    class="box-style "
                  >
                    ${govFront}
                  </td>
                  <td style="border: none;border-bottom: none;" class="box-style height: 40px;">${govBack}
</td>
                  <td
                    style="border-top: none;border-bottom: none;"
                    class="box-style height: 40px;"
                  >
                                        ${govSide}

                  </td>
                  <td
                    style="border-top: none; height: 40px;border-bottom: none; border-right: none;"
                    class="box-style "
                  >
                                                            ${govSideOne}

                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td class="p-0 border none">
            <table class="inner-table border:none">
              <tbody>
                <tr>
                  <td
                    rowspan="2"
                    style="height: 40px; border-left:none;"
                    class="box-style"
                  >
                  Setbacks
                  </td>
                  <td style="height: 40px;" class="box-style">Font</td>
                  <td  style="height: 40px;" class="box-style">Back</td>
                  <td  style="height: 40px;" class="box-style">Side</td>
                  <td  style="height: 40px;" class="box-style ">Side</td>
                </tr>
                <tr>
                  <td
                    style="border-top: none ;height: 40px;"
                    class="box-style "
                  >
                                                                               ${asperActualFront}

                  </td>
                  <td   class="box-style height: 40px;">${asperActualBack}</td>
                  <td
                    style="border-top: none"
                    class="box-style height: 40px;"
                  >
                  ${asperActualSide}
                  </td>
                  <td
                    style="border-top: none; height: 40px;"
                    class="box-style"
                  >
                  ${asperActualSideOne}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>


    


    <table style="border: none; border-collapse: collapse; margin-top: 120px;">
  <tr>
    <td style="border-bottom: none;"></td>
    <td style="border-bottom: none;"></td>
  </tr>
</table>
    <table style="width: 100%; margin-top: 20px; border-collapse: collapse">

      <tr>
        <td    style="height: 40px;padding-left: 1%" >Section 6</td>
        <td   style="height: 40px;" colspan="6" class="text-center center">Valuation</td>
      </tr>
      <tr>
        <td colspan="5"  class="text-center center"   style="height: 40px;">Value as per Government</td>
      </tr>
      <tr>
        <td   style="height: 40px; padding-left: 1%">Particular</td>
        <td    style="height: 40px;"  class="box-style">Area</td>
        <td   style="height: 40px;" class="box-style">Rate</td>
        <td    style="height: 40px;"  class="box-style">Particular</td>
        <td    style="height: 40px;" class="box-style">Value Rs.</td>
      </tr>
      <tr>
        <td   style="height: 40px;padding-left: 1%">Const of Land</td>
        <td   style="height: 40px;" class="text_center">${dlcArea}</td>
        <td   style="height: 40px;" class="text_center">${dlcRate}</td>
        <td   style="height: 40px;"class="text_center">Value in Rs.</td>
        <td  style="height: 40px;"  class="text_center">${
          Number(dlcRate) * Number(dlcArea)
        }
</td>
      </tr>
      <tr>
        <td   style="height: 40px;padding-left: 1%">Const of Construction (Basement)</td>
        <td    style="height: 40px;" class="text_center">${basementArea}</td>
        <td    style="height: 40px;"  class="text_center">${basementRate}</td>
        <td   style="height: 40px;" class="text_center">Market Value Rs.</td>
        <td    style="height: 40px;" class="text_center">${
          Number(basementArea) * Number(basementRate)
        }</td>
      </tr>
      <tr>
        <td   style="height: 40px;padding-left: 1%">Const of Construction (GF)</td>
        <td   style="height: 40px;" class="text_center">${gfArea}</td>
        <td   style="height: 40px;" class="text_center">${gfRate}</td>
        <td   style="height: 40px;" class="text_center">Market Value Rs.</td>
        <td   style="height: 40px;" class="text_center">${
          Number(gfArea) * Number(gfRate)
        }</td>
      </tr>
      <tr>
        <td  style="height: 40px;padding-left: 1%">Const of Construction (FF)</td>
        <td   style="height: 40px;" class="text_center">${ffArea}</td>
        <td   style="height: 40px;"  class="text_center">${ffRate}</td>
        <td   style="height: 40px;" class="text_center">Market Value Rs.</td>
        <td   style="height: 40px;"class="text_center">${
          Number(ffRate) * Number(ffArea)
        }</td>
      </tr>
      <tr>
        <td  style="height: 40px;padding-left: 1%">Const of Construction (Sf)</td>
        <td   style="height: 40px;" class="text_center">${sfArea}</td>
        <td  style="height: 40px;" class="text_center">${sfRate}</td>
        <td   style="height: 40px;"class="text_center">Market Value Rs.</td>
        <td  style="height: 40px;" class="text_center">${
          Number(sfArea) * Number(sfRate)
        }</td>
      </tr>
      <tr>
        <td  style="height: 40px;padding-left: 1%" class="border-bottom none">Total cost</td>
        <td   style="height: 40px;" colspan="4" class="centered border-bottom none">${totalValueGov}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td colspan="5"  style="height: 40px;padding-left: 1%" class="centered">Market Value</td>
      </tr>
      <tr>
        <td  style="height: 40px;padding-left: 1%">Particulars</td>
        <td  style="height: 40px;" class="box-style">Area</td>
        <td  style="height: 40px;" class="box-style">Rate</td>
        <td  style="height: 40px;" class="box-style">Particular</td>
        <td  style="height: 40px;" class="box-style">Value Rs.</td>
      </tr>
      <tr>
        <td  style="height: 40px;padding-left: 1%">Const of Land</td>
        <td  style="height: 40px;" class="text_center">${marketDLCArea}</td>
        <td  style="height: 40px;" class="text_center">${marketDLCRate}</td>
        <td   style="height: 40px;" class="text_center">Value in Rs.</td>
        <td  style="height: 40px;"  class="text_center">${
          Number(marketDLCArea) * Number(marketDLCRate)
        }</td>
      </tr>
      <tr>
        <td  style="height: 40px;padding-left: 1%">Const of Construction (Basement)</td>
        <td  style="height: 40px;" class="text_center">${marketBasementArea}</td>
        <td  style="height: 40px;" class="text_center">${marketBasementRate}</td>
        <td  style="height: 40px;" class="text_center">Market Value Rs.</td>
        <td  style="height: 40px;" class="text_center">${
          Number(marketBasementArea) * Number(marketBasementRate)
        }</td>
      </tr>
      <tr>
        <td  style="height: 40px;padding-left: 1%">Const of Construction (Gf)</td>
        <td  style="height: 40px;" class="text_center">${marketGfArea}</td>
        <td  style="height: 40px;" class="text_center">${marketGfRate}</td>
        <td  style="height: 40px;" class="text_center">Market Value Rs.</td>
        <td  style="height: 40px;" class="text_center">${
          Number(marketGfArea) * Number(marketGfRate)
        }</td>
      </tr>
       <tr>
        <td  style="height: 40px;padding-left: 1%">Const of Construction (FF)</td>
        <td  style="height: 40px;" class="text_center">${marketFFArea}</td>
        <td   style="height: 40px;"class="text_center">${marketFFRate}</td>
        <td  style="height: 40px;" class="text_center">Market Value Rs.</td>
        <td  style="height: 40px;" class="text_center">${
          Number(marketFFArea) * Number(marketFFRate)
        }</td>
      </tr>
      <tr>
       <tr>
        <td  style="height: 40px;padding-left: 1%">Const of Construction (Sf)</td>
        <td   style="height: 40px;"class="text_center">${marketSFArea}</td>
        <td  style="height: 40px;" class="text_center">${marketSfRate}</td>
        <td  style="height: 40px;" class="text_center">Market Value Rs.</td>
        <td   style="height: 40px;" class="text_center">${
          Number(marketSfRate) * Number(marketSFArea)
        }</td>
       <tr>
        <td  style="height: 40px;padding-left: 1%">QSV/Distances Value (Sale within 60 days)</td>
        <td  style="height: 40px;" colspan="4" class="centered">${qSVDistress}</td>
      </tr>

      <tr>
        <td  style="height: 40px;padding-left: 1%" >Total cost of Property</td>
        <td  style="height: 40px;" colspan="4" class="centered">${totalCostProperty}</td>
      </tr>

      <tr>
        <td  style="height: 40px;padding-left: 1%">Conservative Value (Sale within 90 days)</td>
        <td  style="height: 40px;" colspan="4" class="centered">${conservativeValue}</td>
      </tr>
      <tr>
        <td   style="height: 40px;padding-left: 1%"class="border-bottom none">Price Confirm from.</td>
        <td colspan="4" class="p-0 border-bottom none">
          <table class="inner-table border-bottom none">
            <tbody>
              <tr>
                <td   style="height: 40px;" class="box-style border-left border-top none">
                  Local Property Detail/Local Person name
                </td>
                <td   style="height: 40px;" class="box-style border-right border-top none">
               ${personName}
                </td>
              </tr>
              <tr>
                <td  style="height: 40px;" class="box-style border-left">
                  Local Dealer/Local Shop name
                </td>
                <td  style="height: 40px;" class="box-style border-right">               ${shopName}
</td>
              </tr>
              <tr>
                <td  style="height: 40px;" class="box-style border-bottom none border-left">
                  Value According to Dealer
                </td>
                <td  style="height: 40px;" class="box-style border-bottom none border-right">
                  ${accordingDealer}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </table>

    <table class="border-bottom none">
      <tr>
        <td   style="height: 40px;padding-left: 1%"  rowspan="6"  >Insurable Value</td>
        <td   style="height: 40px;"   rowspan="6" class="centered ">Toral B.U.A (SQFT)</td>
        <td   style="height: 40px;"  rowspan="6" class="centered ">
        ${BUA}
        </td>
        <td  style="height: 40px;"  rowspan="6" class="centered ">Insurances Rate</td>
        <td  style="height: 40px;"  rowspan="6" class="centered ">${insurableRate}</td>
        <td   style="height: 40px;"  rowspan="6" class="centered ">Total</td>
        <td   style="height: 40px;"  rowspan="6" class="centered ">${
          Number(BUA) * Number(insurableRate)
        }</td>
      </tr>
    </table>

   <table style="width: 100%; border-collapse: collapse">
   <td style="height: 50px;padding-left: 1%">Section 7</td>
        <td  style="height: 50px;" colspan="3" class="centered">Remark</td>
</td>
${userData?.remark?.map((Value: any) => {
  return ` 
  <tr>
     <td style="height: 50px;padding-left: 1% ; border-bottom: none;">${Value?.id}</td>
        <td  style="height: 50px; border-bottom: none;" colspan="3" class="centered">${Value.text}</td>
      </tr>
  `;
})}
      
</table>

    
   <table style="width: 100%;  border-collapse: collapse">
    
      <tr>
        <td style="padding-left: 1%;height: 45px">Section 8</td>
        <td style="height: 55px" class="centered">Property Summary</td>
      </tr>
      <tr>
        <td  class="border-bottom none" style="padding-left: 1% ;  height: 45px;">Description</td>
        <td style="height: 55px" class="border-bottom none text-center center ">${
          userData.allFiledData.description
        }</td>
      </tr>
    </table>

    <table>

      <tr>
        <td style="height:55px;padding-left: 1%;">We Hereby declare thar : -</td>
      </tr>
     <tr>
        <td style="height: 55px;padding-left: 1%;">1 The Property Was Inspected By our Engineer(${
          userData.allFiledData.engineerName
        })</td>
      </tr>
     <tr>
        <td style="height: 55px;padding-left: 1%;">2 We have no direct or indicated interest in the property Values </td>
      </tr>
      <tr>
        <td style="height: 55px;padding-left: 1%;"  >
          3 The information furnished above is true and correct to the best of of Property (Excellent/Good/Average/Poor)
        </td>
      </tr>
      <tr>
        <td style="height: 55px;padding-left: 1%;"  >
          4 The information furnished above is true and correct to the best of of Property (Excellent/Good/Average/Poor)
        </td>
      </tr>
      <tr>
        <td  style="height: 55px;padding-left: 1%;" >
          3 The information furnished above is true and correct to the best of of Property (Excellent/Good/Average/Poor)
        </td>
      </tr>
      <tr>
        <td  style="height: 55px;padding-left: 1%;"  >
          5 The information furnished above is true and correct to the best of of Property (Excellent/Good/Average/Poor)
        </td>
      </tr>
      <tr>
        <td  style="height: 55px;padding-left: 1%;" >
          6 The information furnished above is true and correct to the best of of Property (Excellent/Good/Average/Poor)
        </td>
      </tr>
    </table>


<table style="border: none; border-collapse: none; margin-top: 120px;">
  <tr>
    <td style="border-bottom: none;"></td>
    <td style="border-bottom: none;"></td>
  </tr>
   </table>
  
          <table style="width: 100%; margin-top: 50px; border-collapse: collapse">

      <tr>
        <td colspan="5" class="centered border-bottom none">Photographs</td>
      </tr>
      <table class="image-table">
        <tr>
          <td>
            <img
                 src='${userData.images.InternalImage}'
              alt="Image 1"
              width="450px"
   style="height: auto; max-height: 600px;"
             />
            <div class="font-size 20">Internal Image</div>
          </td>
          <td>
            <img
                 src='${userData.images.ExternalImage}'
              alt="Image 2"
              width="450px"
   style="height: auto; max-height: 600px;"

            />
            <div class="font-size 20">External Image</div>
          </td>
        </tr>
 
      </table>
    </table>

      </table>
      <table class="image-table">
        <tr>
          <td>
           <img
                 src='${userData.images.valuerImage}'
              alt="Image 3"
              width="450px"
                 style="height: auto; max-height: 600px;"

            />  
            <div>valuer Image</div>
          </td>
          <td>
           <img
                 src='${userData.images.ProperImage}'
              alt="Image 3"
              width="450px"
                 style="height: auto; max-height: 600px;"

            />
            <div>Proper Image </div>
          </td>
        </tr>
         
        
     </table>

 
       
 
     <table class="image-table " style="border: none; border-collapse: none; margin-top: 120px;">
     
        <tr>
          <td>
           <img
                 src='${userData.images.sitPlanImage}'
              alt="Image 3"
              width="450px"
                 style="height: auto; max-height: 600px;margin-top: 120px; "

            />
            <div>SitPlan Image </div>
          </td>
          <td>
                      <div style={{display:flex}}>

            <div  >
            latitude ${userData.allFiledData.latitude}
              </div>
            <div>longitude ${userData.allFiledData.longitude}</div>
             </div>
           <img
                 src='${userData.images.locationImage}'
              alt="Image 3"
              width="450px"
                 style="height: auto; max-height: 600px;margin-top: 120px; "

            />
            <div>Location Image</div>
            
          
          </td>
        </tr>
        <tr  style="border: none; border-collapse: none; margin-top: 120px;">
          <td>
           <img
                 src='${userData.images.imageApproach}'
              alt="Image 3"
              width="450px"
                 style="height: auto; max-height: 600px;margin-top: 5px; "

            />
            <div>ImageApproach Image </div>
          </td>
          <td>
           <img
                 src='${userData.images.sitPlanImageOne}'
              alt="Image 3"
              width="450px"
                 style="height: auto; max-height: 600px;margin-top: 5px; "

            />
            <div>SitPlan Image</div>
          </td>
        </tr>
       
     </table>
    

  ${userData?.multiplyImage?.map((Value: any) => {
    return ` 
    <table class="image-table margin-top: 50px;  border: none"  >
     <tr style="border: none;">
          <td>
  <tr style=>
      <td style="padding: 8px; box-sizing: border-box; width: 50%;">
                <img
                 src='${Value.uri}'
               width="350px"
          style="width: 100%; height: auto; max-height: 600px; margin-top: 5px;"

            />

              </tr>
              </tr>
             

          `;
  })}
   <tr>
        <td>${userData?.allFiledData?.comment}</td>

            </tr>
 </tr>
  </tr>
 

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body>
</html>

 `;
};
