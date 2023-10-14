//SPDX-License-Identifyer: MIT
pragma solidity >=0.4.16 <0.9.0;

contract Kompass {

    uint16 constant DOMAIN_INDEX_COST = 500;
    address payable constant initiator = payable (0x1eFE73B1684d284963CF49C835059bc7D772D603);

    Domain[] public domains;
    


    

    mapping(address => RequestData) internal indexationRequests;


    struct RequestData {
        string root_domain_url;
        string sitemap_location;
    }

    struct Domain {
        address owner;
        string root_url;
        Page[] internal_pages;
        uint16 summerized_score;
        string[] keywords;
        string[] urls;
        string sitemap_location;
    }

    struct Page {
        string[] internal_links;
        string[] external_links;
        uint16 score;
        string[] keywords;
        string url;
    }

    modifier onlyInitiator() {
        require(initiator == msg.sender, "You don't have permissions to edit this.");
        _;
    }

    function createDomain(string memory _json) external onlyInitiator {
        //Create a domain with its pages from the Rust counterpart.



    }

    function requestIndexation(string memory _root_domain_url, string memory _sitemap_location) external payable {
        require(msg.value == DOMAIN_INDEX_COST, "Insufficiant funds, please check your balance and try again.");
        bool success = initiator.send(DOMAIN_INDEX_COST);
        require(success, "Transfer failed");
        RequestData memory request = RequestData({
            root_domain_url: _root_domain_url,
            sitemap_location: _sitemap_location
        });
        indexationRequests[msg.sender] = request;
    }

    function getSerp(string memory query) external view returns(Domain[] memory) {
        // split query into terms 
        string[] memory terms = splitString(query);
        
        // find the top rated domains for each term 
        

        // return a list of the top rated pages based om the domain and search word


    }


    // Gets all the domains that contain atleast one of the search terms
    function getDomainsFromSearchTerms(string[] memory _search_terms) internal view returns(Domain[] storage) {
        Domain[] memory _domains = Domain[](domains.length);
        for (uint8 i = 0; i < _search_terms.length; i++) {
            string memory currentTerm = _search_terms[i];
            for (uint256 j = 0; j < domains.length; j++) {
                if (arrayContains(domains[j].keywords, currentTerm)) {
                    for (uint16 k = 0; k < domains.length; k++) {
                        if (_domains[k])
                    }
                }
            }
        }
        return _domains;
    }

    // Determines wheather an array of strings contains a certain strign value 
    function arrayContains(string[] memory _array, string memory _search_term) private pure returns(bool) {
        bool contain = false;
        for (uint16 i = 0; i < _array.length; i++) {
            if (stringsMatch(_array[i], _search_term)) {
                contain = true;
                break;
            }
        }
        return contain;
    }


    function stringsMatch(string memory _string_1, string memory _string_2) private pure returns(bool) {
        return keccak256(abi.encodePacked(_string_1)) == keccak256(abi.encodePacked(_string_2));
    } 


    function splitString(string memory word) private pure returns(string[] memory) {
        string[] memory terms = new string[](bytes(word).length);
        string memory currentTerm = "";
        bytes memory str = bytes(word);
        for(uint16 i = 0; i < str.length; i++) {
            if (str[i] == " ") {
                terms[i] = currentTerm;
                currentTerm = "";
            }
        }
        return terms;
    } 

}

