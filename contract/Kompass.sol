//SPDX-License-Identifyer: MIT
pragma solidity >=0.4.16 <0.9.0;

contract Kompass {

    address payable constant initiator = payable (0x1eFE73B1684d284963CF49C835059bc7D772D603);
    mapping(string => Domain) public domains;
    mapping(address => RequestData) internal indexationRequests;

    uint16 constant DOMAIN_INDEX_COST = 500;

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
        for (uint8 index = 0; index < terms.length; index++) {
            string memory currentTerm = terms[index];



        }

        // return a list of the top rated pages based om the domain and search word


    }

    function splitString(string memory word) private pure returns(string[] memory) {
        string[] memory terms;
        string memory currentTerm = "";
        for(uint16 i = 0; i < bytes(word).length; i++) {
            if (bytes(word)[i] = bytes(" ")) {
                terms.push(currentTerm);
                currentTerm = "";
            }
        }
        return terms;
    } 

}

