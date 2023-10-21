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
        string title;
        string description;
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

    function createDomain(address _owner, string memory _root_url, uint16 _summerized_score, string[] memory _keywords, string[] memory _urls, string memory _sitemap_location) external onlyInitiator {
        //Create a domain with its pages from the Rust counterpart.

        Domain memory domain = Domain({
            owner: _owner,
            root_url: _root_url,
            summerized_score: _summerized_score,
            keywords: _keywords,
            urls: _urls,
            internal_pages:  new Page[0],
            sitemap_location: _sitemap_location
        });

        domains.push(domain);


    }

    function defaultPageList() internal returns(Page[] memory) {
        Page[] memory pages;
        return pages;
    }
    

    function createPage(string memory _domain_url, string[] memory _internal_links, string[] memory _external_links, uint16 _score, string[] memory _keywords, string memory _url) public onlyInitiator {
        Domain storage domain = findDomainByUrl(_domain_url);

        Page memory page = Page({
            internal_links: _internal_links,
            external_links: _external_links,
            score: _score,
            keywords: _keywords,
            url: _url
        });

        domain.internal_pages.push(page);
    }   

    function findDomainByUrl(string memory _domain_url) internal returns(Domain storage) {
        for (uint256 i = 0; i < domains.length; i++) {
            if (stringsMatch(domains[i].root_url, _domain_url)) {
                return domains[i];
            } else {
                continue;
            }
        }
        revert("Domain not found");
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
        string[] memory terms = splitString(query, " ");
        
        //get domains from search terms
        Domain[] memory _domains = getDomainsFromSearchTerms(terms);


        // find the top rated domains for each term 
        

        // return a list of the top rated pages based om the domain and search word


    }


    // Gets all the domains that contain atleast one of the search terms
    function getDomainsFromSearchTerms(string[] memory _search_terms) internal view returns(Domain[] memory) {
       Domain[] memory _domains = Domain[](domains);
       uint256 currentOffset = 0;
       for (uint8 i = 0; i < domains.length; i++) {
            for(uint16 j = 0; j < domains[i].keywords.length; j++){
                for (uint8 k = 0; k < _search_terms.length; k++) {
                    if(stringsMatch(domains[i].keywords[j], _search_terms[k])) {
                        _domains[currentOffset] = domains[i];
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


    function splitString(string memory _word, string memory _pattern) private pure returns(string[] memory) {
        string[] memory terms = new string[](bytes(_word).length);
        string memory currentTerm = "";
        bytes memory str = bytes(_word);
        for(uint16 i = 0; i < str.length; i++) {
            string memory char = string(abi.encodePacked(str[i]));
            if (stringsMatch(char, _pattern)) {
                terms[i] = currentTerm;
                currentTerm = "";
            }
        }
        return terms;
    } 



}

