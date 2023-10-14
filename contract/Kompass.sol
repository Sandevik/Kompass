//SPDX-License-Identifyer: MIT
pragma solidity >=0.4.16 <0.9.0;

contract Kompass {

    address constant initiator =  0x1eFE73B1684d284963CF49C835059bc7D772D603;
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
        Request memory request = Request({
            root_domain_url: _root_domain_url,
            sitemap_location: _sitemap_location
        });
        indexationRequests[msg.sender] = request;
    }

    function getSerp(string memory query) external view {
        // split query into terms 

        // find the top rated domains for each term 

        // return a list of the top rated pages based om the domain and search word


    }


}

